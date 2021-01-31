import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

export default function ItemList( {items, onClickDone, onClickDelete} ) {
  const classes = useStyles();

 return (
    <List className={classes.root}>
      {items.map((item) => {
        return (
          <Item
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </List>
  );
};
  ItemList.defaultProps = {
    items: [
      {
        value: 'Пусто',
        isDone: false,
        id: 0
      }
    ]
  }
ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

