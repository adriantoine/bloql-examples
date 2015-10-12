
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createComponent } from 'bloql/Post';

class Post extends Component {

  componentDidMount() {
    // Once the component is mounted, we can update the slug
    // as we want and it will update the article displayed!
    this.props.bloql.setSlug(window.location.hash.substring(1));
  }

  render() {

    // If no post is in props, it means the component hasn't been
    // initialised, so we should return an empty component
    if(!this.props.bloql.post) {
      return <div/>;
    }

    // Process date
    var date = new Date(this.props.bloql.post.meta.date);

    // Render your post using all react components you want
    return (
      <div>
        <h1>{`${this.props.bloql.post.meta.title} (posted on ${date.toDateString()})`}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.bloql.post.content}}/>
      </div>
    );

  }
}

// Convert your component into a Bloql element
Post = createComponent(Post);

ReactDOM.render(
  <Post/>,
  document.getElementById('app')
);
