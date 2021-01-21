import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';




const InputItem = () => (<div className={styles.wrap}>
    <TextField
        id="standard-basic"
        label="Добавить задание"
        className={styles.root}

        InputProps={{className: styles.root}}
    />
   </div>);



export default InputItem;
// export default withStyles(styles)(InputItem);
