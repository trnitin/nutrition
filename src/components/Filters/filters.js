import React from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import Classes from './filters.module.css';

const filters = (props) => {

    return (
        <Accordion className={Classes.accordion_bg}>
            <Card className={[Classes.card]}>
                {/* <Card.Header className={Classes.header, Classes.cardstyle}> */}
                <Accordion.Toggle as={Card.Header} eventKey="0" className={Classes.header, Classes.cardstyle}>
                    {props.title1}
                </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ color: 'black' }}> {props.brandData}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className={Classes.card}>
                {/* <Card.Header className={Classes.header, Classes.cardstyle}> */}
                {/* <Accordion.Toggle as={Button} variant="link" eventKey="1"> */}
                <Accordion.Toggle as={Card.Header} eventKey="1" className={Classes.header, Classes.cardstyle}>
                    {props.title2}
                </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Form.Check
                            type="radio"
                            label="All"
                            name="formHorizontalRadios"
                            value={0}
                            active
                            onChange={props.clicked}
                        />
                        <Form.Check
                            type="radio"
                            label="Below 500"
                            name="formHorizontalRadios"
                            value={500}
                            onChange={props.clicked}
                        />
                        <Form.Check
                            type="radio"
                            label="500 - 1000"
                            name="formHorizontalRadios"
                            value={1000}
                            onChange={props.clicked}
                        />
                        <Form.Check
                            type="radio"
                            label="1000 - 2000"
                            name="formHorizontalRadios"
                            value={2000}
                            onChange={props.clicked}
                        />
                        <Form.Check
                            type="radio"
                            label="Above  2500"
                            name="formHorizontalRadios"
                            value={2500}
                            onChange={props.clicked}
                        />
                        <Form.Label>{props.pricefilter}</Form.Label>
                        {/* <Form.Group controlId="formBasicRangeCustom">
                            <Form.Label>Range</Form.Label>
                            <Form.Control type="range" custom min="0" max={props.maxprice} value={props.pricefilter} onChange={props.clicked} />
                            <Form.Label>{props.pricefilter}</Form.Label>
                        </Form.Group> */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion >
    )
}
export default filters;