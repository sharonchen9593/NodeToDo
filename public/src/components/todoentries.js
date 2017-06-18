var deleteAPI = __dirname + "api/todo"
console.log(__dirname)

class TodoEntries extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      delete: false
    }
  }

  complete() {
    var complete = confirm("remove " + this.props.todo.todo + " from list?");
    if (complete) {
      $.ajax({
        url: deleteAPI,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({id: this.props.todo._id}),
        success: (data) => {
          this.setState({delete: true})
          this.props.getData()
        },
        error: () => {
          console.log("error deleting")
        }
      })
    } else {
      console.log("keep")
    }

  }

  render() {
    console.log(this.props.todo)
    return <div onClick = {()=>this.complete()}>{this.props.todo.todo}</div>;
  }
};




export default TodoEntries;