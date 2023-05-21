import Todo from "./Todo";


const TodoList = (props) =>{
    const {todoList , setTodoList}=props;
    const output=todoList.map((listitem) => <Todo key={listitem.id} listitem={listitem} todoList={todoList} setTodoList={setTodoList}></Todo>
    )
    return(
        <div>
            {output}
        </div>
    )
}

export default TodoList;