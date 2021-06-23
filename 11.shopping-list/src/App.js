/** @format */

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import AddItemForm from "./components/ShoppingList/AddItemForm";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, title: "apple", completed: true },
    { id: 2, title: "orange", completed: false },
    { id: 3, title: "milk", completed: true },
  ]);

  const addShoppingItemCallback = (shoppingTitle) => {
    setShoppingList((prevShoppingList) => {
      return [
        { id: Date.now().toString(), title: shoppingTitle, completed: false },
        ...prevShoppingList,
      ];
    });
  };
  const changeShoppingItem = (id, newTitle) => {
    setShoppingList((prevShoppingList) => {
      return prevShoppingList.map((shopping) => {
        if (shopping.id === id) {
          shopping.title = newTitle;
        }
        return shopping;
      });
    });
  };
  const toggleCompleteCallback = (id) => {
    //   setShoppingList(prevShoppingList => {
    //     return prevShoppingList.map(shopping => {
    //       if (shopping.id === id) {
    //       shopping.completed=!shopping.completed
    //       }
    //       return shopping
    //   })
    // })
    let newShoppingList = shoppingList.map((shopping) => {
      if (shopping.id === id) {
        shopping.completed = !shopping.completed;
        return shopping;
      }
      return shopping;
    });
    setShoppingList(newShoppingList);
  };
  const removeShoppingCallback = (id) => {
    setShoppingList((prevShoppingList) =>
      prevShoppingList.filter((shopping) => shopping.id !== id)
    );
  };
  return (
    <div className='shopping vh-100'>
      <Navbar />
      <AddItemForm addShoppingItemCallback={addShoppingItemCallback} />
      <ShoppingList
        shoppingList={shoppingList}
        changeShoppingItem={changeShoppingItem}
        toggleCompleteCallback={toggleCompleteCallback}
        removeShoppingCallback={removeShoppingCallback}
      />
    </div>
  );
}

export default App;
