import { useState } from 'react'
import ToDo from '/src/ToDo/ToDo.tsx'
import './Form.css'

const Form = () => {
    const [items, setItems] = useState([])
    const [todo, setTodo] = useState('')

    const addItem = (item:string) => {
        if (item) {
            setItems(items => [...items, item])
            setTodo('')
        }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter'){
            addItem(todo);
        }
    }

    const changeTodo = (newitem:string, index:number) => {
        if(newitem) {
            setItems(items.map((item, i) => (i === index ? newitem : item)));
        }
    }

    const deleteItem = (idx:number) => {
        setItems(items => items.filter((item, index) => index !== idx));
    }

  return (
    <>
        <div className="add-todo">
            <input type="text"
                id="item"
                placeholder="Enter new to do"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                onKeyPress={handleEnter}
                />
            <button className="add-btn" onClick={() => addItem(todo)}>+</button>
        </div>
        <div>
            <ul>
                {items.map((item, idx) => 
                    <ToDo item={item} idx={idx} items={items} changeTodo={changeTodo} deleteItem={deleteItem}/>
                )}
            </ul>
        </div>
    </>
  )
}

export default Form