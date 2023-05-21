import styles from "../style.module.css"
import shortid from 'shortid'
const Form = (props) =>{

    const {todo , setTodo , todoList, setTodoList}=props;

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo , id: shortid.generate() }]);
        setTodo('');
    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}> 
                <input value={todo} type="text" placeholder="Add Todo Tasks" className={styles.todoinput} onChange={handleChange}></input>
                <button type="submit" className={styles.todobutton}>Add Task</button>
            </form>
        </div>
    )
}

export default Form;