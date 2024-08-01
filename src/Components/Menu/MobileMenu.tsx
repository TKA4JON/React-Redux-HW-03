import styles from './menu.module.css'
import { useState } from 'react'
import  Airlines  from './airlinesList'
import Transfers from './transfersNumber'
import Arrow from '../../assets/arrow.svg'
import ArrowDown from '../../assets/arrow2.svg'
import { MobileMenuProps } from '../../types/types'

const MobileMenu: React.FC<MobileMenuProps> = ({ selectedAirlines, selectedTransfers }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenuVisibile = () => {
        setMenuVisible(!menuVisible);
      };
    return(
        <div className={styles.mobileMenu}>
            <div className={styles.mobileTitle}>
                <p>Авиакомпании: {selectedAirlines.join(', ') || 'любая'}. Пересадки: {selectedTransfers.join(', ') || ' любое кол-во.'}</p>
                <div className={styles.mobileOpen}>
                    <div className={styles.mobileOpenBar}>{!menuVisible ? 'Открыть настройки' : 'Скрыть настройки'}
                    </div>
                    <button className={styles.openOptions} onClick={toggleMenuVisibile}><img src={!menuVisible ? Arrow : ArrowDown}></img></button>
                </div>
            </div>
            {menuVisible && <div className={styles.mobileFilters}>
            <Airlines />
            <Transfers />
            </div>}
        </div>
    )
}

export default MobileMenu;