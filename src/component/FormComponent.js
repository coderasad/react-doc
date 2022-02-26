import React, {useState} from 'react';
import useTitle              from "./hook/useTitle";
import {Col, Container, Row} from "react-bootstrap";

const FormComponent = () => {

    useTitle('Form')
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setName(e.target.name.value)
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        if(e.target.name.value && e.target.password.value && e.target.email.value !== ''){
            console.log('submit');
            e.target.name.value = ''
            e.target.password.value  = ''
            e.target.email.value  = ''
            setIsShow(true);
        }
        else{
            setIsShow(false);
            alert('field required')
        }

    }

    return (
       <Container>
           <Row>
               <Col>
                   <form onSubmit={handleSubmit}>
                       <fieldset>
                           <legend>Info</legend>
                           <input type="text" name='name' placeholder='Your Name'/><br/>
                           <input type="text" name='email' placeholder='Your Email'/><br/>
                           <input type="text" name='password' placeholder='Your Password'/><br/>
                           <button type="submit">Submit</button>
                           <hr/>
                           {isShow ?
                            <div>
                                <p><b>Name: </b>{name}</p>
                                <p><b>Email: </b>{email}</p>
                                <p><b>Password: </b>{password}</p>
                            </div>
                                   : <p>No Data</p>
                           }
                       </fieldset>
                   </form>
               </Col>
           </Row>
       </Container>
    );
};

export default FormComponent;
