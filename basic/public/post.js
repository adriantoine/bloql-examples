
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setComponent } from 'bloql/Post';

class Post extends Component {

  componentDidMount() {
    // Once the component is mounted, we can update the slug
    // as we want and it will update the article displayed!
    this.props.bloql.setSlug(window.location.hash.substring(1));
  }

  render() {

    // If no post is in props, it means the component hasn't been
    // initialised, so we should return an empty component
    if(!this.props.post) {
      return <div/>;
    }

    // Render your post using all react components you want
    return (
      <div>
        <h1>{this.props.post.meta.title + ' (posted on ' + this.props.post.meta.date + ')'}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.post.content}}/>
      </div>
    );

  }
}

// Convert your component into a Bloql element
Post = setComponent(Post);

ReactDOM.render(
  <Post/>,
  document.getElementById('app')
);
