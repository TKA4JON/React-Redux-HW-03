import React, { useEffect, useState } from 'react';
import styles from './layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchTickets } from '../../redux/Tickets/action';
import ButtonBlock from './buttonBlock';
import Tickets from './ticket';
import ButtonMore from './buttonMore';
import { selectTickets, selectTicketsLoading ,selectTicketsError } from '../../redux/Tickets/selector';
import { selectAirlineFilter } from '../../redux/Airlines/selector';
import { selectTransferFilter } from '../../redux/Transfers/selector';
import MobileMenu from '../Menu/MobileMenu';

const Layout: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tickets = useSelector(selectTickets);
    const loading = useSelector(selectTicketsLoading);
    const error = useSelector(selectTicketsError);
    const filterAirline = useSelector(selectAirlineFilter);
    const filterTransfer = useSelector(selectTransferFilter);
    const [Count, setCount] = useState(4);
    useEffect(() => {
      dispatch(fetchTickets());
    }, [dispatch]);
  
    const loadMoreTickets = () => {
      setCount(prevCount => prevCount + 4);
    };
    
    const filteredTickets = tickets.filter(ticket =>
      (filterAirline.includes(ticket.company) || filterAirline.length === 0) && (filterTransfer.includes(ticket.connectionAmount?.toString() || '0') || filterTransfer.length === 0)
    );
  
  return (
    <div className={styles.main}>
          <ButtonBlock />
          <MobileMenu selectedAirlines={filterAirline} selectedTransfers={filterTransfer}/>
          <Tickets tickets={filteredTickets.slice(0, Count)} />
          {loading && <div>Загрузка билетов...</div>}
          {error && <div>Ошибка: {error}</div>}
          {!loading && <ButtonMore onClick={loadMoreTickets} />}
    </div>
  );
};

export default Layout;