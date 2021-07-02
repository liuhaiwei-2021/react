/** @format */

import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store";

const TodoList = () => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          style={{ width: "250px", marginRight: "5px" }}
          placeholder={store.getState().inputValue}
        />
        <Button type='primary'>Add</Button>
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
