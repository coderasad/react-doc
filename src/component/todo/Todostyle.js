import React, {} from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {GrClose}          from "react-icons/gr";

const TodoStyle = ({item,index,todolist,todoIndex}) => {
    const deleteData = () => {
        todolist.splice(index,1);
        todoIndex(todolist)
    }
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                {item.todo}
            </div>
            <Badge type='button' bg="danger"  pill onClick={deleteData} >
                <GrClose />
            </Badge>
        </ListGroup.Item>
    );
};

export default TodoStyle;
