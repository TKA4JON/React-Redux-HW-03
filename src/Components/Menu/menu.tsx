import styles from './menu.module.css'
import  Airlines  from './airlinesList'
import Transfers from './transfersNumber'

function Menu (){
    return(
        <div className={styles.menu}>
            <Transfers />
            <Airlines />
        </div>
    )
}

export default Menu;