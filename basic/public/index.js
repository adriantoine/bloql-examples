
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createComponent } from 'bloql/PostList';

class PostList extends Component {

  render() {

    // Render your post list using all react components you want
    return (
      <ul>
        {this.props.bloql.posts.map(post =>
          <li key={post.meta.slug}>
            <a href={'/post.html#' + post.meta.slug}>{post.meta.title}</a>
          </li>
        )}
      </ul>
    );

  }

}

// Convert your component into a Bloql element
PostList = createComponent(PostList);

ReactDOM.render(
  <PostList/>,
  document.getElementById('app')
);
