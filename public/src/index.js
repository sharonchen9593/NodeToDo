//dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
import NewEntry from './components/newentry';
import TodoList from './components/todolist'

var apiUrl = __dirname + 'api/todos/test';
// get api


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
          <TodoList todos = {this.state.data} getData = {this.getData.bind(this)}/>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))