import React, {useState, useEffect} from 'react';
import {Button, Col, Form, Row, Toast, ToastContainer} from "react-bootstrap";

const TodoForm = ({newTodo, editTodo, setEditTodo, editIndex, setEditIndex, updateTodo, todolist}) => {
    // const [formValues, setFormValues] = useState(editTodo);
    const [formErrors, setFormErrors] = useState([]);
    const [showError, setShowError]   = useState(false);
    const [show, setShow]             = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditTodo({...editTodo, [name]: value})
        /*let title = e.target.value;
         let newO = {...editTodo};
         newO['todo'] = title;
         setEditTodo(newO);*/
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (editIndex === '') {
            if (Object.keys(formErrors).length === 0) {
                setShow(true)
                setShowError(false)
                newTodo(editTodo);
                setEditTodo('')
            } else {
                setShowError(true)
            }
        } else {
            const updateTodo = todolist[editIndex].todo = editTodo.todo;
            setEditTodo(updateTodo)
            setEditIndex('')
        }

    }

    const validate = (valus) => {
        const errors = {};
        if (!valus.todo) {
            errors.todo = 'Field is required!'
        }
        return errors;
    }

    useEffect(() => {
        setFormErrors(validate(editTodo))
    }, [editTodo]);


    return (
        <>
            <ToastContainer className="p-3" position={'top-end'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>New Todo Successfully added!</Toast.Body>
                </Toast>
            </ToastContainer>
            <form onSubmit={handleSubmit}>
                <Row className="my-3">
                    <Col sm={10}>
                        <Form.Group controlId="formBasicTodo">
                            {/*<Form.Label>New Todo</Form.Label>*/}
                            <Form.Control
                                onChange={handleChange}
                                value={editTodo.todo || ''}
                                name='todo'
                                type="text"
                                placeholder="Enter Todo write here"
                            />
                            <Form.Text className="text-danger">
                                {showError === true ? formErrors.todo : ''}
                            </Form.Text>

                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Button className='w-100' variant="primary" type="submit">
                            {editIndex === '' ? 'Submit' : 'Update'}
                        </Button>
                    </Col>
                </Row>


            </form>
        </>
    );
};

export default TodoForm;
