/** @format */

import { useState } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store";
import actiontypes from "../store/reducer/actiontypes";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    store.dispatch({
      type: actiontypes().todos.addTodo,
      payload: { todo },
    });
    setTodo("");
    };
    const deleteTodo = (index) => {
        store.dispatch({
            type: actiontypes().todos.deleteTodo,
            payload:index
        })
    }
  return (
    <div style={{ margin: "5px" }}>
      <div>
        <Input
          style={{ width: "250px", marginRight: "5px", marginTop: "5px"}}
          placeholder='write something'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type='primary' onClick={addTodo}>
          Add
        </Button>
      </div>
      <div style={{ margin: "20px", width: "300px" }}>
        <List
          bordered
          dataSource={store.getState().list}
          renderItem={(item,index) => <List.Item key={item.index} onClick={deleteTodo.bind(index)}>{item}</List.Item>}></List>
      </div>
    </div>
  );
};

export default TodoList;
