import React, {useEffect, useState}  from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import useTitle                      from "./hook/useTitle";

const UseEffectComponent = () => {
    useTitle('UseEffect')
    const [count, setCount]             = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        console.log('counting')
    }, [count]);
    useEffect(() => {
        let data = setInterval(() => {
            console.log('Time Running')
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(data)
        }
    }, [currentTime]);


    return (
        <Container>
            <Row>
                <Col md={8}>
                    <div className={`rounded px-3 py-2`}>
                        <h3>I am functional Component <span className={`text-light`}>{count}</span></h3>
                        <p>
                            Time Now {currentTime}
                        </p>
                    </div>
                </Col>
                <Col md={8} className={`my-2`}>
                    <Button onClick={() => {
                        setCount(count + 1)
                    }}>+</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default UseEffectComponent;
