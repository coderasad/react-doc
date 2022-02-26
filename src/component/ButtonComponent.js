import React, {useState}                    from 'react';
import {Badge, Button, Col, Container, Row} from "react-bootstrap";
import useTitle                             from "./hook/useTitle";

const IncrementComponent = () => {
    useTitle('Button')
    const [number, setNumber] = useState(0);
    const inCrement           = () => {
        setNumber(number + 1)
    }
    const deCrement           = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{span: 6}}>
                    <Button variant="primary"
                            onClick={() => inCrement()}
                    >
                        Increment
                    </Button>
                    <Button variant="success">
                        {number}
                    </Button>

                    <Button variant="warning"
                            onClick={() => deCrement()}
                    >
                        Decrement
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default IncrementComponent;
