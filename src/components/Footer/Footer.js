import React from 'react';
import Button from '@material-ui/core/Button';
import styles from "./Footer.module.css";
import PropTypes from 'prop-types';

const Footer = ({count}) => (<div className={styles.wrap}>
    <p className={styles.text}>Осталось выполнить: {count}</p>   
    </div>);

Footer.defaultProps = {

    count: 0
}
Footer.propTypes = {
  count: PropTypes.number.isRequired
}

export default Footer;