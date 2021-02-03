import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';


class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('interval'), 1000);
  };

 // componentDidUpdate() {
 //   console.log('componentDidUpdate');
 // };

  componentWillUnmount() {
     clearInterval(this.timerID);
  }


  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;

    return (
      <ListItem>
        <Checkbox
          checked={isDone}
          tabIndex={-1}
          onClick={() => onClickDone(id)}
          color="primary"
        />
        <ListItemText primary={value} classes={{
          root: isDone && styles.done
        }} />
        <ListItemSecondaryAction>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon onClick={() => onClickDelete(id)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}


Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default Item;