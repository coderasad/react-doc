import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap";

const TodoForm = ({ newTodo }) => {
    const initialValues = { todo: '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState([]);
    const [showError, setShowError] = useState(false);
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(formErrors).length === 0) {
            setShow(true)
            setShowError(false)
            newTodo(formValues)
            setFormValues(initialValues)
        } else {
            setShowError(true)
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
        setFormErrors(validate(formValues))
    }, [formValues]);


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
                <Row className="my-3" >
                    <Col sm={10}>
                        <Form.Group controlId="formBasicTodo">
                            {/*<Form.Label>New Todo</Form.Label>*/}
                            <Form.Control
                                onChange={handleChange}
                                value={formValues.todo}
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
                            Submit
                        </Button>
                    </Col>
                </Row>


            </form>
        </>
    );
};

export default TodoForm;
