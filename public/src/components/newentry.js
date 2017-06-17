// dont need to import babel. already imported in index.html

class NewEntry extends React.Component {

  constructor() {
    super()
  }

  onButtonClick(event) {
    event.preventDefault()
    console.log($(".entrybox").val())
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