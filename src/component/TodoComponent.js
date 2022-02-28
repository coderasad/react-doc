import React, { useState,useEffect} from 'react';
import useTitle                     from "./hook/useTitle";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm                      from "./todo/TodoForm";
import TodoSHow                      from "./todo/TodoShow";

const TodoComponent = () => {
    useTitle('Todo')

    const demoTodoList = [{todo: 'List'}];
    const [todos,setTodos] = useState(demoTodoList);
    const newTodo = (value) =>{
        setTodos([...todos,value])
    }
    const todoIndex = (value) =>{
        console.log(value)
        setTodos([...todos,value])
        console.log(todos,'todos')
    }
    
    
    const [test,setTest] = useState(todos);
    const testHandle = () => {
        setTest([...test,{todo: 'List'}])
       
    }
    useEffect(() => {
        console.log(todos);      
    },[testHandle])
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <TodoForm newTodo={newTodo} />
                    <TodoSHow todoIndex={todoIndex} todolist={todos}/>
                    <p onClick={() => testHandle()}>Click me</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoComponent;