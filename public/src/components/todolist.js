import TodoEntries from './todoentries';

const TodoList = (props) => {

  console.log(props.todos)
  if (props.todos.length>0) {
    return (
      <div>
        {props.todos.map( todo =>
            <TodoEntries todo = {todo} key = {todo._id}/>
          )}
      </div>
      );

  } else {
    return (
      <div>
        empty
      </div>
    )
  }
};




export default TodoList;

