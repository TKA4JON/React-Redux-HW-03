import React from 'react';
import { ButtonMoreProps } from '../../types/types'
import styles from './layout.module.css'

const ButtonMore: React.FC<ButtonMoreProps> = ({ onClick }) => {
  return <button className={styles.buttonMore} onClick={onClick}>Загрузить еще билеты</button>;
}

export default ButtonMore;
