import React, {useState} from 'react'; 
import './TodoList.css'; 


function TodoApp(){
    const [task, setTask] = useState('')  
    const [storeItem, setStoreItem] = useState([])

    const changeHandler = (e)=>{
        setTask(e.target.value)
    } 

    const formSubmit = (e)=>{
        e.preventDefault(); 

        if(task.trim() === ''){
            return alert('Please enter a task')
        }

        const newItem = [...storeItem, task] 
        setStoreItem(newItem)
        setTask('')
    } 

    const deleteHandler = (indexValue) =>{
        const newValue = storeItem.filter((item, index) => index !== indexValue); 
        setStoreItem(newValue)
          
    }
    
    
    
    return(
        <div className='form'> 
            <center><h3>To Do List Item</h3></center>
            <form onSubmit={formSubmit}> 
            
                <input type='text' placeholder='Added You are favorite item' onChange={changeHandler} name='task' value={task} /> &nbsp; 
                <input type='submit' value='Add' name='Add'/>
            </form> 
            <div>
                <ul>
                    {storeItem.map((item, index)=>
                    <div className='list-item'>
                        <li key={index}>{item}</li>   
                         <button onClick={() =>deleteHandler(index)}>Delete</button>
                    </div>)}
                </ul>
            </div>
           
        </div>
    )
}
export default TodoApp;