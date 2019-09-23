import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: '',
    }
  }

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    const {friends, picture, name} = this.state;

    let newFriends = friends.slice();
    newFriends.push({picture, name});

    this.setState({
      friends: newFriends,
      picture: '',
      name: '',
    })
  }



  render(){
    // console.log(this.state.picture)
    // console.log(this.state.name)
    // console.log(this.state.friends)
    const friends = this.state.friends.map((element, index) => {
      return(
        <div key={index}>
          <img width="100px" src={element.picture} />
          <span>{element.name}</span>
        </div>
      )
    })

    return (
      <div className="App">
        <label>Picture:</label>
        <input onChange={(event) => this.updatePicture(event.target.value)} value={this.state.picture}/>
        <label>Name:</label>
        <input onChange={(event) => this.updateName(event.target.value)} value={this.state.name}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;