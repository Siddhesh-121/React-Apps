import styles from "../style.module.css"

const Todo = ({listitem , todoList , setTodoList}) =>{

    const deletetodo = () =>{
        setTodoList(todoList.filter((item) => item.id !== listitem.id));
    }

    return (
        <div>
            <div className={styles.todotask}>
                <h3 className={styles.todoname}>{listitem.name}</h3>
                <button className={styles.tododelete} onClick={deletetodo}>Done</button>
            </div>

        </div>
    )
}

export default Todo;