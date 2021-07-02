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
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          style={{ width: "250px", marginRight: "5px" }}
          placeholder='write something'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type='primary' onClick={addTodo}>
          Add
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={store.getState().list}
          renderItem={(item) => <List.Item>{item}</List.Item>}></List>
      </div>
    </div>
  );
};

export default TodoList;
