import React       from 'react';
import TodoStyle   from "./Todostyle";
import {ListGroup} from "react-bootstrap";

const TodoSHow = ({todolist, todoIndex, editTodoValue, handleEditIndex}) => {

    return (
        <ListGroup>
            {
                todolist.map((item, index) => (
                    <TodoStyle key={index} item={item} index={index} todolist={todolist} todoIndex={todoIndex} editTodoValue={editTodoValue} handleEditIndex={handleEditIndex}/>
                ))
            }
        </ListGroup>
    );
};

export default TodoSHow;
