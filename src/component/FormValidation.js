import React, {useEffect, useState}        from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import useTitle                            from "./hook/useTitle";

const FormValidation = () => {

    useTitle('FormValidation')

    const initialValues               = {username: '', email: '', password: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState([]);
    const [skills, setSkills]         = useState([]);

    const [isDisable, setIsDisable] = useState(true);

    const handleChange      = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
    const checkMe           = (e) => {
        setIsDisable(!isDisable);
    }
    const handleSkillChange = (e) => {
        let data = e.target.value;
        if (e.target.checked) {
            setSkills([...skills, data])

        } else {
            setSkills(skills.filter(skill => skill !== data))
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            alert('form submit successfully')
            setFormValues(initialValues)
        }
    }
    const validata     = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required!'
        }
        if (!values.email) {
            errors.email = 'Email is required!'
        }
        return errors;
    }

    useEffect(() => {
        setFormErrors(validata(formValues))
    }, [formValues])

    /*useEffect(() => {
        console.log(skills)
    }, [skills])*/

    return (
        <Container>
            <Row>
                <Col md={6} className={`my-3`}>
                    <pre>
                        {JSON.stringify({formValues,skills}, undefined, 2)}
                    </pre>
                    <h1>Login Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={formValues.username}
                                name='username'
                                type="text"
                                placeholder="Enter name"
                                aria-autocomplete='off'
                            />
                            <Form.Text className="text-danger">
                                {formErrors.username}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={formValues.email}
                                name='email'
                                type="email" placeholder="Enter email"/>

                            <Form.Text className="text-danger">
                                {formErrors.email}
                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={formValues.password}
                                name='password'
                                type="password" placeholder="Password"/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Skill</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="HTML"
                                name='skills'
                                value='HTML'
                                checked={skills.includes('HTML')}
                                onChange={handleSkillChange}/>

                            <Form.Check
                                type="checkbox"
                                label="CSS"
                                name='skills'
                                value='CSS'
                                checked={skills.includes('CSS')}
                                onChange={handleSkillChange}/>

                            <Form.Check
                                type="checkbox"
                                label="Javascript"
                                name='skills'
                                value='Javascript'
                                checked={skills.includes('Javascript')}
                                onChange={handleSkillChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" onChange={checkMe}/>
                        </Form.Group>
                        <Button disabled={isDisable} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FormValidation;
