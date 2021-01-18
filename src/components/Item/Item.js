import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';

const Item = ({value, isDone}) => (<div className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
    {value}
    <DeleteIcon color="primary" className={styles.delete}/>
</div>);

export default Item;
