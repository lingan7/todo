import React from 'react'
import useState from 'react'
import {Button} from '@material-ui/core'
import "./Todo.css"


function Todo({todos}){
    return(
        <div className="todo">
            {
                todos.map(t => (
                    <div className="todo-data">
                        <h2> {t.title}</h2>
                        <p>{t.desc}</p>
                        <Button variant="contained" color="primary"> DONE!!</Button>
                    </div>
                ))
            }
        </div>

    );
}
export default Todo