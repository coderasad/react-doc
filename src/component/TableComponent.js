import React, {useState}            from 'react';
import users                        from '../users.json'
import {Col, Container, Row, Table} from "react-bootstrap"
import Thead                        from "./Table/Thead";
import Tbody                        from "./Table/Tbody";
import useTitle                     from "./hook/useTitle";

const TableComponent = () => {
    useTitle('Table')
    const [allUsers, setAllUsers] = useState([...users.users]);
    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <Thead/>
                        <Tbody allUsers={allUsers}/>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default TableComponent;
