import React, {useState} from 'react';
import style             from "../css/style.module.css";
import useTitle              from "./hook/useTitle";
import {Col, Container, Row} from "react-bootstrap";

const StyleComponent = () => {
    useTitle('Style')
    const [color, setColor] = useState('blue')

    const randomColor = () => {
        let colors       = ['red', 'green', 'blue', 'pink', 'gray'];
        return colors[Math.floor((Math.random() * colors.length))]
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={`${style.italic} ${style.uppercase} text-center`}>This is heading</h1>
                    <h1
                        style={{color: color}}
                        className={`${color === 'red' ? 'text-center' : 'text-center fst-italic'}`}
                    >
                        This is heading</h1>
                    <div
                        onClick={()=> setColor(randomColor)}
                        className={`${style.box}`}
                        style={{backgroundColor: color}}
                    >
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StyleComponent;
