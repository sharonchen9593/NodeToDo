// dont need to import babel. already imported in index.html

class NewEntry extends React.Component {

  constructor(props) {
    super(props)
  }

  onButtonClick(event) {
    event.preventDefault()
    var newItem = $(".entrybox").val()
    $.ajax({
        url: __dirname + "api/todo",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({todo: newItem, isDone: false, hasAttachment:false}),
        success: (data) => {
          this.props.getData()
          $(".entrybox").val('')
        },
        error: () => {
          console.log("error deleting")
        }
      })
  }

  render() {
    return (
      <form>
      New Entry: <input type="text" className="entrybox"/>
      <button onClick={(event) => this.onButtonClick(event)}> Submit </button>
      </form>
    );

  }
};




export default NewEntry;