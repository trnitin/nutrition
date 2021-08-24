import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Classes from './slider.module.css';



const Slider = (props) => {
    const [index, setIndex] = useState(props.start);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval='3000' slide={true} className={Classes.slider}>
            <Carousel.Item>
                <img
                    className={Classes.slider_image}
                    src="https://img2.hkrtcdn.com/12089/bnr_1208801_o.jpg"
                    alt="First slide"
                />

                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={Classes.slider_image}
                    src="https://img6.hkrtcdn.com/12004/bnr_1200365_o.jpg"
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={Classes.slider_image}
                    src="https://img2.hkrtcdn.com/12004/bnr_1200371_o.jpg"
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;