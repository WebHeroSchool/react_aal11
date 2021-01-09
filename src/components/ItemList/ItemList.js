import React from 'react';
import Item from '../Item/Item'

const ItemList = ({todoItem}) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={ 'Выполнить +2 задания'} /></li>
  <li><Item todoItem={ 'Сводить кота в ветеренарную клинику'} /></li>
</ul>);

export default ItemList;
