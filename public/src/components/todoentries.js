

class TodoEntries extends React.Component {
  constructor(props) {
    super(props)

  }

  complete() {
    var complete = confirm("remove " + this.props.todo.todo + " from list?");
    if (complete) {
      $.ajax({
        url: __dirname + "api/todo",
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({id: this.props.todo._id}),
        success: (data) => {
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
    return <li onClick = {()=>this.complete()}>{this.props.todo.todo}</li>;
  }
};




export default TodoEntries;