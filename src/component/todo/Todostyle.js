import React, {useState} from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {GrClose} from "react-icons/gr";
import {FiEdit} from "react-icons/fi";
import {BsCheckLg} from "react-icons/bs";

const TodoStyle = ({item, index, todolist, todoIndex, editTodoValue, handleEditIndex}) => {

    const [completeClass, setCompleteClass] = useState(false)

    const completeTodo = () => {
        setCompleteClass(!completeClass)
    }
    const editTodo     = () => {
        editTodoValue(item)
        handleEditIndex(index)
        setCompleteClass(false)
    }
    const deleteData   = () => {
        todoIndex(todolist.filter(items => todolist.indexOf(items) !== index))
    }
    return (
        <ListGroup.Item
            className={completeClass ? 'd-flex justify-content-between align-items-start completeClass' : 'd-flex justify-content-between align-items-start'}
            as="li"
        >
            <div className="ms-2 me-auto">
                {item.todo}
            </div>
            <Badge type='button' bg="success" className={completeClass ? 'bg-opacity-25 not-allowed' : ''} pill
                   onClick={completeTodo}>
                <BsCheckLg/>
            </Badge>
            <Badge type='button' bg="info" pill onClick={editTodo}>
                <FiEdit/>
            </Badge>
            <Badge type='button' bg="danger" pill onClick={deleteData}>
                <GrClose/>
            </Badge>
        </ListGroup.Item>
    );
};

export default TodoStyle;
