import React, { Component } from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { connect } from 'react-redux';


class App extends Component {
  state = {
    UserName: "",
    Age: 0

  }
  onChangeUsername = (event) => {
    console.log(event.target.value)
    const upusrnam = event.target.value;
    this.setState({ UserName: upusrnam })
  }

  onChangeAge = (event) => {
    const upAge = event.target.value;
    this.setState({ Age: upAge })
  }

  render() {
    return (

      <div>
        <div className="Person">
          <input type="text" value={this.state.UserName} onChange={(event) => this.onChangeUsername(event)} placeholder="enter username" />
          <input type="number" value={this.state.Age} onChange={(event) => this.onChangeAge(event)} placeholder="Enter Age" />
          <button onClick={() => this.onStoreResult(this.state.UserName, this.state.Age)}>Submit</button>
        </div>
        <div>
          {this.props.userDetails.map(strresul => {
            return <Person key={strresul.id} onClick={() => this.props.onDeleteHandler(strresul.id)} name={strresul.name} age={strresul.age} />
          })}

        </div>

      </div>

=======

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
>>>>>>> 4855a6ae264c6e24441d4e87aef800d0e9f64cb7
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  }
}

const mapStatetoDispacth = dispatch => {
  return {
    onStoreResult: (name, age) => dispatch({ type: "STORE_DETAILS", name: name, age: age })
  }
}

export default connect(mapStateToProps, mapStatetoDispacth)(App);
=======
export default App;
>>>>>>> 4855a6ae264c6e24441d4e87aef800d0e9f64cb7
