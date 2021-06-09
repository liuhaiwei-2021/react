/** @format */

import React, { Component } from "react";
import "./CommentsList.css";

export class CommentsList extends Component {
  state = {
    userName: "",
    userContent: "",
    comments: [
      { id: 1, name: "Molly", content: "perfect!" },
      { id: 2, name: "Haiwei", content: "awesome!" },
      { id: 3, name: "Lexin", content: "amazing!" },
    ],
  };
  handleForm = (e) => {
    const target = e.target;
    // according to the type to get the value
    const value = target.type === "checkbox" ? target.checked : target.value;
    // get the name property, name= state, so we can change value of the name.
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  renderList() {
    const { comments } = this.state;
    if (comments.length === 0) {
      return (
        <div className='no comments'>
          There is no comments. please add your comments!
        </div>
      );
    }
    return (
      <ul>
        {comments.map((item) => (
          <li key={item.id}>
            <h3>Name:{item.name}</h3>
            <p>Comment:{item.content}</p>
          </li>
        ))}
      </ul>
    );

    /* return this.state.comments.length === 0 ? (
      <div className='no comments'>
        There is no comments. please add your comments!
      </div>
    ) : (
      <ul>
        {this.state.comments.map((item) => (
          <li key={item.id}>
            <h3>Name:{item.name}</h3>
            <p>Comment:{item.content}</p>
          </li>
        ))}
      </ul>
    ); */
  }
  addComment = () => {
    const { comments, userName, userContent } = this.state;
    if (userName.trim() === "" || userContent.trim() === "") {
      alert("please add your name and comment");
      return;
    }
    const newComments = [
      {
        id: Date.now().toString(),
        name: userName,
        content: userContent,
      },
      ...comments,
    ];
    this.setState({
      comments: newComments,
      userName: "",
      userContent: "",
    });
  };
  render() {
    const { userName, userContent } = this.state;
    return (
      <div className='container'>
        <h1>Comments</h1>
        <div className='comments'>
          <input
            type='text'
            name='userName'
            value={userName}
            onChange={this.handleForm}
            placeholder='please add your name'></input>
          <br />
          <textarea
            name='userContent'
            value={userContent}
            onChange={this.handleForm}
            placeholder='please add your comments'></textarea>
          <br />
          <button onClick={this.addComment}>Comment</button>
        </div>

        {this.renderList()}
      </div>
    );
  }
}

export default CommentsList;
