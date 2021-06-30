/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./views/Posts";
import CreatePost from "./views/CreatePost";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "first", body: "This is the first post" },
    { id: 2, title: "second", body: "This is the second post" },
    { id: 3, title: "third", body: "This is the third post" },
  ]);
  const addPost = (title, body) => {
    let post = {
      id: Date.now().toString(),
      title,
      body,
    };
    setPosts((prevposts) => {
      return [...prevposts, post];
    });
  };

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='bg'>
          <div className='container'>
            <Switch>
              <Route path='/' exact render={() => <Posts posts={posts} />} />
              <Route
                path='/create'
                exact
                render={() => <CreatePost addPost={addPost} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
