
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createComponent } from 'bloql/Post';

class Post extends Component {

  onButtonClick(slug) {
    // Dynamically loads a different article from a slug
    this.props.bloql.setSlug(slug);
  }

  render() {

    // Process date
    var date = new Date(this.props.bloql.post.meta.date);

    // Render your post using all react components you want
    return (
      <div>

        <div>
          Click on those buttons to switch articles:
          <button onClick={this.onButtonClick.bind(this, 'children-of-men')}>Children of Men</button>
          <button onClick={this.onButtonClick.bind(this, 'markdown-powered')}>Markdown Powered</button>
          <button onClick={this.onButtonClick.bind(this, 'antibes')}>Antibes</button>
          <button onClick={this.onButtonClick.bind(this, 'annecy')}>Annecy</button>
        </div>

        <h1>{`${this.props.bloql.post.meta.title} (posted on ${date.toDateString()})`}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.bloql.post.content}}/>

      </div>
    );

  }
}

// Convert your component into a Bloql element
Post = createComponent(Post);

ReactDOM.render(
  // Initial slug can be set in the slug prop of the component
  <Post slug="children-of-men"/>,
  document.getElementById('app')
);
