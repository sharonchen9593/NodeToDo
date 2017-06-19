import NewEntry from './components/newentry';
import TodoList from './components/todolist';

$(function() {
//dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';

var user = prompt("Username (click cancel to view as anonymous): ")
if (!user) {
  user = 'test';
}
user = user.toLowerCase()
var apiUrl = __dirname + 'api/todos/' + user;



class App extends React.Component {

  constructor(){
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {

    return (
      // $.getJSON(apiUrl)
      // .then((data) => {
      //   this.setState({ data: data })
      // })
      $.ajax({
        url: apiUrl,
        type: 'GET',
        contentType: 'application/json',
        success: (data) => {
          this.setState({
            data: data
          })
        },
        error: () => {
          console.log("error getting")
        }
      })
    )
  }

  render() {
    return (
      <div>
        <NewEntry getData = {this.getData.bind(this)}/>
        <br />
        <ul>
          <TodoList todos = {this.state.data} getData = {this.getData.bind(this)} user = {user}/>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))


})