import React from 'react'
import {useState} from 'react'
import Todo from './Todo'
import './Body.css'


function Body ()
{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todo, setTodo] = useState([]);
    function changeDesc(e){
        setDesc(e.target.value);
    }
    function addTodo(e){
        e.preventDefault();
        setTodo([...todo,{title:title,desc:desc}]);
        setTitle("");
        setDesc("");
    }
    return (
        <div>
            <form className="body">
                <h1>TO-DO-LIST</h1>
                <div className="body-data">
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="What's Your Plan?"/>
                    <input value={desc} onChange={changeDesc} placeholder="When?"/>
                    <button disabled={!title || !desc} className="btn" onClick={addTodo}> ADD it</button>
                </div>
            </form>
            <Todo todos={todo} />
        </div>

    );
} 
export default Body 