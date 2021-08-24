import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import Classes from './itemcard.module.css'

const itemCard = (props) => {

    return (
        <Card className={Classes.itemcard}>
            <Card.Img variant="top" src={props.img} className={Classes.card_image} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className={Classes.card_text}>
                    <p>{props.text}</p>
                </Card.Text>
                <div style={{ display: 'flex', }}>
                    <h5 style={{ flex: '60%' }}><i className="fa fa-rupee" ></i>{props.price}</h5>
                    <h5 style={{ flex: '40%', textDecoration: 'line-through', color: 'grey' }}><i className="fa fa-rupee" ></i>{props.prevPrice}</h5>
                </div>
            </Card.Body>
        </Card>
    )
}

export default itemCard