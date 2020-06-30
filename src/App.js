import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import Spinner from './components/Spinner';
import Post from './components/Post';

class App extends Component {
  state = {
      post: null,
      index: 0,
      backgroundColor: '#daa520',
      error: null
  };

  componentWillMount = () => {
      axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
          .then(res=>{
              console.log(res)
              this.setState({post: res.data.quotes})
          })
          .catch(err => this.setState({error: err.message}));
  };

  newQuoteHandler = () => {
      const getRandomInt = (max) => {
          return Math.floor(Math.random() * Math.floor(max));
        };
      console.log(getRandomInt(this.length));
      const color = this.colorGenerator();
      //document.body.style = 'background: ' + color +';';
      this.setState({index: getRandomInt(this.length), backgroundColor: color});
  };

  colorGenerator = () => { 
      const letters = "0123456789ABCDEF"; 
      let color = '#'; 
      for (let i = 0; i < 6; i++) 
         color += letters[(Math.floor(Math.random() * 16))]; 
      return color;
  };

  render () {
    let article = <Spinner />
    if(this.state.post) {
        this.length = this.state.post.length;
        article = (
          <Post 
            index = {this.state.index}
            post = {this.state.post}
            backgroundColor = {this.state.backgroundColor}
            color =  {this.state.backgroundColor}
            clicked = {this.newQuoteHandler}
          />
        );
    };

    if(this.state.error) {
      article = (<p style={{color:'black'}}>{this.state.error}: Quotes could not be loaded !</p>);
    };


    return (
      <div className="App" style={{background: this.state.backgroundColor, transition: 'background-color ease-in 0.5s'}}>
        <h1>Quotes Machine</h1>
        {article}
      </div>  
    );
  };
};

export default App;
