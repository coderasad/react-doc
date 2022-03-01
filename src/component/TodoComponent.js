import React, { useState} from 'react';
import useTitle                     from "./hook/useTitle";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm                      from "./todo/TodoForm";
import TodoSHow                      from "./todo/TodoShow";

const TodoComponent = () => {
    useTitle('Todo')

    const demoTodoList = [{todo: 'List'}];
    const [todos,setTodos] = useState(demoTodoList);
    const [editTodo,setEditTodo] = useState('');
    const [editIndex,setEditIndex] = useState('');
    const newTodo = (value) =>{
        setTodos([...todos,value])
    }
    const todoIndex = (value) =>{
        setTodos(value)
        setEditTodo(value)
    }
    const editTodoValue = (value) =>{
       setEditTodo(value)

    }
    const handleEditIndex = (value) => {
        setEditIndex(value)
    }
    const updateTodo = (value) => {
        setEditTodo(value)
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <TodoForm newTodo={newTodo} editTodo={editTodo} setEditTodo={setEditTodo} editIndex={editIndex} setEditIndex={setEditIndex} todolist={todos} updateTodo={updateTodo}/>
                    <TodoSHow todoIndex={todoIndex} todolist={todos} editTodoValue={editTodoValue} handleEditIndex={handleEditIndex}/>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoComponent;