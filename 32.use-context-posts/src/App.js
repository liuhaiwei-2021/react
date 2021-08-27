/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./views/Posts";
import NewPosts from "./views/NewPosts";
import { useState, useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "./context/ThemeContext";


function App() {

  const { isLight, light, dark, toggleIsLight } = useContext(ThemeContext)
  const theme= isLight ?light:dark
  
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      title: "post 1",
      body: "this is an unique one",
      created: new Date(),
    },
    {
      id: uuidv4(),
      title: "post 2",
      body: "this is an unique two",
      created: new Date(),
    },
    {
      id: uuidv4(),
      title: "post 3",
      body: "this is an unique three",
      created: new Date(),
    },
  ]);

  const addPostCallback = (title, body) => {
    let post = {
      id: uuidv4(),
      title,
      body,
      created: new Date(),
    };
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  };
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='bg' style={{ background: theme.bg }}>
          <div className='container'>
          <Switch >
            <Route path='/' exact>
              <Posts posts={posts} />
            </Route>

            <Route path='/create' exact>
              <NewPosts addPostCallback={addPostCallback} />
            </Route>
          </Switch>

          </div>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
