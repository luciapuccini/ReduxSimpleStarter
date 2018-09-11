import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostsNew from './components/post_new'
import PostsIndex from './components/post_index';
import store from './store'
import PostsShow from './components/post_show';
import SelectPosts from './components/selected_posts_list'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
