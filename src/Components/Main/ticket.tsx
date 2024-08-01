import { TicketsProps } from '../../types/types';
import styles from './layout.module.css';


const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  
  const getStopsText = (stopsCount: number) => {
    if (stopsCount == 0) {
        return 'Без пересадок';}
    if (stopsCount == 1){
      return '1 пересадка';
    }
    if (stopsCount == 2){
      return '2 пересадки';
    }
    if (stopsCount == 3){
      return '3 пересадки';
    }
    if (stopsCount > 3){
      return 'более 3х пересадок';
    }
};
  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours} ч ${minutes} мин`;
  };

  
  return (
    <div className={styles.ticketWrap}>
      {tickets.map((ticket, index) => (
        <div key={index} className={styles.ticket}>
          <div className={styles.ticketFirstRaw}>
            <div className={styles.price}>{ticket.price.toLocaleString('ru-RU')} Р</div>
            <div className={styles.airline}>
                <img src={`./src/assets/${ticket.company}.png`} alt={ticket.company} />
            </div>
          </div>
          <div className={styles.ticketSecondRaw}>
            <div className={styles.airports}>
              {ticket.from} - {ticket.to}
            </div>
            <div className={styles.time}>
              {ticket.time.startTime} - {ticket.time.endTime}
            </div>
            <div className={styles.durationLabel}>В пути</div>
            <div className={styles.duration}>
              {formatDuration(ticket.duration)}
            </div>
            <div className={styles.transferLabel}>Пересадки</div>
            <div className={styles.transfer}>
                {getStopsText(ticket.connectionAmount || 0)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
