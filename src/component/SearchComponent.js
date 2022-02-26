import React    from 'react';
import {Form}   from "react-bootstrap";
import useTitle from "./hook/useTitle";

const SearchComponent = ({setName}) => {

    useTitle('Search')
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="name@example.com" />
            </Form.Group>
        </Form>
    );
};

export default SearchComponent;
