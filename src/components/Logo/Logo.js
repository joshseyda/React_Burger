import React from 'react';
import favicon from '../../assets/images/favicon.ico';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={favicon} alt="MyLogo"/>
  </div>
);

export default logo;