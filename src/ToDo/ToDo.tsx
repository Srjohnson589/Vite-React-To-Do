import { useState } from 'react'
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BsFillTrash3Fill } from "react-icons/bs";
import './ToDo.css'

interface IProps {
    item: string;
    idx: number;
    items: string[];
    changeTodo: (item:string, index:number) => string[];
    deleteItem: (idx:number) => string[];
}

const ToDo = ({item, idx, changeTodo, deleteItem} :IProps) => {
    const [update, setUpdate] = useState(false);
    const [checked, setChecked] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState('');
    const [checkClass, setCheckClass] = useState('unchecked')

    const changeBox = () => {
        setChecked(prevState => !prevState);
        if (checkClass === 'unchecked') {
            setCheckClass('checked')
        } else {
            setCheckClass('unchecked');
        }
    };

    const toUpdate = () => {
        setUpdate(prevState => !prevState)
    }

    const handleUpdateEnter = (event) => {
        if (event.key === "Enter"){
            changeTodo(updatedTodo, idx);
            toUpdate();
        }
    }

    return (
        <>
            <li key={idx} className={checkClass}>
                <div onClick={changeBox} className="checkcontainer">
                    {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </div>
                <div >
                    {update ? <input 
                                className="change-input"
                                type="text" 
                                placeholder={item}
                                value={updatedTodo}
                                onChange={(event) => setUpdatedTodo(event.target.value)}
                                onKeyPress={handleUpdateEnter}
                                /> 
                            : <p className="todo-text" onClick={toUpdate}>{item}</p>}
                </div>
                <BsFillTrash3Fill className="trash" onClick={() => deleteItem(idx)} />
            </li>
        </>
    )
}

export default ToDo