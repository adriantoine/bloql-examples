
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createComponent } from 'bloql/PostList';

class PostList extends Component {

  onButtonClick(filters) {
    // Dynamically loads a different set of articles depending on filters
    this.props.bloql.setFilters(filters);
  }

  onResetButtonClick(filters) {
    // Reset all filters
    this.props.bloql.resetFilters();
  }

  render() {

    // Render your post list using all react components you want
    return (
      <div>

        <div>
          <button onClick={this.onResetButtonClick.bind(this)}>Reset All</button>
        </div>

        <div>
          Tag filters:
          <button onClick={this.onButtonClick.bind(this, {tags: null})}>Reset tags</button>
          <button onClick={this.onButtonClick.bind(this, {tags: ['film']})}>Films</button>
          <button onClick={this.onButtonClick.bind(this, {tags: ['film', 'france']})}>French films</button>
          <button onClick={this.onButtonClick.bind(this, {tags: ['town']})}>Towns</button>
          <button onClick={this.onButtonClick.bind(this, {tags: ['france']})}>France</button>
          <button onClick={this.onButtonClick.bind(this, {tags: ['poland']})}>Poland</button>
        </div>

        <div>
          Date filters:
          <button onClick={this.onButtonClick.bind(this, {endDate: null, startDate: null})}>Reset date</button>
          <button onClick={this.onButtonClick.bind(this, {endDate: '2015-01-01', startDate: null})}>Articles before 01/01/2015</button>
          <button onClick={this.onButtonClick.bind(this, {endDate: null, startDate: '2015-01-01'})}>Articles after 01/01/2015</button>
          <button onClick={this.onButtonClick.bind(this, {endDate: '2015-05-31', startDate: '2015-05-01'})}>Articles in May 2015</button>
        </div>

        <ul>
          {this.props.posts.edges.map(edge =>
            <li key={edge.node.meta.slug}>
              <a href={'/post.html#' + edge.node.meta.slug}>{edge.node.meta.title}</a>
            </li>
          )}
        </ul>
      </div>
    );

  }

}

// Convert your component into a Bloql element
PostList = createComponent(PostList);

ReactDOM.render(
  <PostList/>,
  document.getElementById('app')
);
