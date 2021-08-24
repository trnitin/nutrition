import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classes from './multislider.module.css'

const multislider = (props) => {
    console.log(props.data)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const handleClick = (ele) => {
        console.log(ele, "clicked item")
    }


    const sliderData = props.data.map((ele, index) => {
        console.log(ele, "fh")
        return <div key={index}>
            <img
                className={classes.multislider_img}
                src={ele}
                alt="Third slide"
                onClick={() => handleClick(index)}
            />
        </div>
    })




    return (
        <Carousel responsive={responsive} infinite={true} >
            {sliderData != null || sliderData != undefined ? sliderData : null}
        </Carousel >
    )
}

export default multislider