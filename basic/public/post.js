
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createPost from 'bloql/Post';

var Post = createPost(React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.post.meta.title + ' (posted on ' + this.props.post.meta.date + ')'}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.post.content}}/>
      </div>
    );
  }
}));

ReactDOM.render(
  <Post slug={ window.location.hash.substring(1) }/>,
  document.getElementById('app')
);
