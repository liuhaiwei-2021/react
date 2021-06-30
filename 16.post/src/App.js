/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./views/Posts";
import CreatePost from "./views/CreatePost";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import PostsContextProvider from "./contexts/PostsContext";

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='bg' style={{ background: theme.bg }}>
          <div className='container'>
            <PostsContextProvider>
              <Switch>
                <Route path='/' exact component={Posts} />
                <Route path='/create' exact component={CreatePost} />
              </Switch>
            </PostsContextProvider>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
