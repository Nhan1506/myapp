import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/index';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/index';

//import {Switch} from 'react-router';
function App() {

  return (
    <div className="App">
      <Header></Header>

      <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Albums</NavLink></p>

      <Switch>
        
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>

        <Route path="/" component={CounterFeature} exact ></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        
        <Route component={NotFound} ></Route>
      </Switch>

    </div>
  );
}

export default App;
