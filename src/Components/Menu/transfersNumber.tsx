import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { toggleTransferOption } from '../../redux/Transfers/reducer';
import { selectTransferOptions } from '../../redux/Transfers/selector';
import styles from './menu.module.css';

const Transfers: React.FC = () => {
  const options = useSelector(selectTransferOptions);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: string) => {
    dispatch(toggleTransferOption(value));
  };

  return (
    <form className={styles.transfersForm}>
      <h3>Количество пересадок</h3>
      {options.map((option) => (
        <div key={option.value} className={styles.listOptions}>
          <input
            className={styles.inputTransfers}
            type="checkbox"
            id={option.value}
            checked={option.checked}
            onChange={() => handleChange(option.value)}
          />
          <label htmlFor={option.value} className={styles.labelTransfers}>{option.label}</label>
        </div>
      ))}
    </form>
  );
};

export default Transfers;
