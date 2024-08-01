import styles from './menu.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { toggleOption } from '../../redux/Airlines/reducer';
import { selectCheckboxOptions } from '../../redux/Airlines/selector';

const Airlines: React.FC = () => {
    const options = useSelector(selectCheckboxOptions);
    const dispatch = useDispatch<AppDispatch>();
  
    const handleChange = (name: string) => {
      dispatch(toggleOption(name));
    };
  
    return (
      <form className={styles.airlinesForm}>
        <h3>Компании</h3>
        {options.map((option) => (
          <div key={option.value} className={styles.listOptions}>
            <input 
              className={styles.inputAirlines}
              type="checkbox"
              id={option.value}
              checked={option.checked}
              onChange={() => handleChange(option.value)}
            />
            <label htmlFor={option.value} className={styles.labelAirlines}>{option.label}</label>
          </div>
        ))}
      </form>
    );
  };
  
export default Airlines;