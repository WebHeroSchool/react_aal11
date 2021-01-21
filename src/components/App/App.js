import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
          {
              value: 'Написать новое приложение',
              isDone: false,
              id: 1
          },
          {
              value: 'Пройти 1ур по react +10стр',
              isDone: true,
              id: 2
          },
          {
              value: 'Сходить на трен-ку в 20:00 ',
              isDone: false,
              id: 3
          }
       ]
    };
      onClickDone = id => {
        const newItemList = this.state.items.map(item => {
          const newItem = { ...item};
              
          if (item.id == id) {
              newItem.isDone = !item.isDone;   
          }  

          return newItem;
        });

        this.setState({ items: newItemList });
      };

      render() {     
        return(
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела:</h1>
                    <InputItem/>
                    <ItemList items={this.state.items} onClickDone={this.onClickDone}  />
                    <Footer count={3}/>
            </div>);
        }
      };

export default App;
