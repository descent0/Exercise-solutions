import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }
  
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const postObjects = data.map(
          postData => new Post(postData.id, postData.title, postData.body)
        );
        this.setState({ posts: postObjects });
      })
      .catch(error => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred: ${error.toString()}`);
    this.setState({ hasError: true, errorMessage: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;