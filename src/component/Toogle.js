import React, {useEffect, useState}           from 'react';
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import useTitle                               from "./hook/useTitle";

const ToogleComponent = () => {
    useTitle('Toggle')

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true)

    return (
        <Container>
            <Row className="my-2">
                <Col>
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={handleClick}
                    >
                        <Spinner
                            as="span"
                            animation={isLoading ? 'border' : 'none'}
                            size="sm"
                        />
                        {isLoading ? ' Loading...' : 'Click to load'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ToogleComponent;
