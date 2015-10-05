
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createPostList from 'bloql/PostList';

var PostList = createPostList(React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.posts.edges.map(edge =>
          <li key={edge.node.meta.slug}>
            <a href={'/post.html#' + edge.node.meta.slug}>{edge.node.meta.title}</a>
          </li>
        )}
      </ul>
    );
  }
}));

ReactDOM.render(
  <PostList/>,
  document.getElementById('app')
);
