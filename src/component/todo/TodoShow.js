import React       from 'react';
import TodoStyle   from "./Todostyle";
import {ListGroup} from "react-bootstrap";

const TodoSHow = ({todolist, todoIndex}) => {

    return (
        <ListGroup>
            {
                todolist.map((item, index) => (
                    <TodoStyle key={index} item={item} index={index} todolist={todolist} todoIndex={todoIndex}/>
                ))
            }
        </ListGroup>
    );
};

export default TodoSHow;
