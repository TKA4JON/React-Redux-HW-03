import styles from "./layout.module.css"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortByPrice, sortByDuration, sortByTransfer } from "../../redux/Tickets/reducer";

const ButtonBlock: React.FC = () => {
    const dispatch = useDispatch();
    const [activeSort, setActiveSort] = useState('price');
    useEffect(() => {
        dispatch(sortByPrice());
    }, [dispatch]);
    const handleSortByPrice = () =>{
        setActiveSort('price');
        dispatch(sortByPrice());
    };
    const handleSortByDuration = () => {
        setActiveSort('duration');
        dispatch(sortByDuration());
    };
    const handleSortByTransfer = () =>{
        setActiveSort('connectionAmount');
        dispatch(sortByTransfer());
    }
    return(
<div className={styles.block}>
    <button className={
        `${styles.first} ${activeSort == 'price' ? styles.active : ''}`
            }
        onClick={handleSortByPrice}>
        Самый дешевый
    </button>
    <button className={`${styles.second} ${activeSort == 'duration' ? styles.active : ''}`} onClick={handleSortByDuration}>
        Самый быстрый
    </button>
    <button className={`${styles.third} ${activeSort == "connectionAmount" ? styles.active : ""}`} onClick={handleSortByTransfer}>
        Самый оптимальный
    </button>
</div>
    )
}
export default ButtonBlock;