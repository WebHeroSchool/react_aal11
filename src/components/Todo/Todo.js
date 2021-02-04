import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Card from "@material-ui/core/Card";
import styles from "./Todo.module.css";

const Todo = () => {
    const initialState = {
        items: [
          {
              value: 'Написать  приложение',
              isDone: false,
              id: 1
          },
          {
              value: 'Пройти 1ур по react',
              isDone: true,
              id: 2
          },
          {
              value: 'Сходить на трен-ку',
              isDone: false,
              id: 3
          }
       ],       
       count: 3
    };

    const [items, setItems] = useState(initialState.items);
    const [count, setCount] = useState(initialState.count);

      useEffect( () => {
          console.log('update');
      });
      useEffect( () => {
          console.log('mount');
      }, []);

     const onClickDone = id => {
        const newItemList = items.map(item => {
           const newItem = { ...item};
              
           if (item.id === id) {
                  newItem.isDone = !item.isDone;
            }  

          return newItem;
        });

       setItems(newItemList);
    };
      
      const onClickDelete = (id) => {
         const newItemList = items.filter(item => item.id !==id);

        setItems(newItemList);
        setCount((count) => count - 1)
      };

      const onClickAdd = (value) => {
         const newItemList = [
            ...items,
                {
                  value,
                  isDone: false,
                  id: count + 1
                }
        ];

        setItems(newItemList);
        setCount((count) => count + 1)
      }; 


      return (
          <div className={styles.wrap}>
              <Card>
                  <h1 className={styles.title}>Важные дела:</h1>
                  <InputItem onClickAdd={onClickAdd} />
                  <ItemList
                      items={items}
                      onClickDone={onClickDone}
                      onClickDelete={onClickDelete}
                  />
                  <Footer count={count}/>
              </Card>
          </div>);
  };


export default Todo;