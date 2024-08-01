import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'

export default function Header () {
    return(
        <header className={styles.header}>
            <img className={styles.imgPlane} src={Logo} alt='Logo Airplane'/>
            <h1>
            Поиск авиабилетов
            </h1>
        </header>
    )
}
