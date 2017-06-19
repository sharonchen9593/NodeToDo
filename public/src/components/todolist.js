import TodoEntries from './todoentries';

const TodoList = (props) => {
  var user = props.user.split('')
  user[0] = user[0].toUpperCase()
  user = user.join('')
  if (props.todos.length>0) {
    return (
      <div>
        <h2>{user}'s To Do List: </h2>
        {props.todos.map( todo =>
            <TodoEntries todo = {todo} key = {todo._id} getData = {props.getData}/>
          )}

      </div>
      );

  } else {
    return (
      <div>
        <h2>{user}'s To Do List: </h2>
        <li>
          empty
        </li>
      </div>
    )
  }
};




export default TodoList;

