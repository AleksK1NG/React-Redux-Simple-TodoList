import React from 'react';
import { Route, Switch } from 'react-router';
import Counter from "./containers/Counter/Counter";
import TodoList from "./containers/Todo/TodoList";
import Todo from "./containers/Todo/Todo";

export default () => (
  <Switch>
    <Route exact path="/" component={Todo} />
    <Route path="/todolist" component={TodoList}/>
    <Route path="/counter" component={Counter}/>
  </Switch>
);