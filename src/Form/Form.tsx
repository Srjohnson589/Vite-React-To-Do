import { useState } from 'react'

const Form = () => {
    const [items, setItems] = useState([])
    const [todo, setTodo] = useState('')

  return (
    <>

        <input type="text"
            id="item"
            placeholder="Enter new to do"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            />
        <button onClick={() => setItems(items => items.concat(todo))}>Add</button>
        {console.log(todo)}
        {console.log(items)}

        <div>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    </>
  )
}

export default Form