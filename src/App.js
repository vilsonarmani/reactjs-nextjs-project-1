//import logo from './logo.svg';
//import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    counter: 0,
    posts: [
      {

        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      }
    ]
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }


  handleTimeout = () => {
    const { counter, posts } = this.state;

    posts[0].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);
  }

  //<> </> fragments
  render() {
    const { counter, posts } = this.state;
    return (
      <div className='App'>
        <h1>{counter}</h1>
        {
          posts.map(post => (
            <div key={posts.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div >
    );
  }
}
export default App;
