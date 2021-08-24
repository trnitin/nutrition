import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import * as constants from '../../container/App/Proteins/constants/constants';
import * as fatconstants from '../../container/App/Fatburners/constants/constant';
import * as actions from '../../container/App/Proteins/actions/actions';
import Loader from '../Loader/loader';
import { Col, Row, Container, Jumbotron, Card, Accordion, Tabs, Tab, Button } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import Classes from './product.module.css';

const Product = (props) => {
    // const [noSelection, setNoSelection] = useState(false);
    // const [sec, SetSec] = useState(6);

    // useEffect(() => {
    //     console.log(props.product.length)
    //     if (props.product.length <= 0) {
    //         SetSec(sec - 1)
    //     }
    //     else {
    //         setNoSelection(true)
    //     }

    // }, [])

    // useEffect(() => {
    //     if (noSelection == false) {
    //         if (sec > 0) {
    //             counter();
    //         }
    //         // if (sec == 0) {
    //         //     props.history.push('./')
    //         // }
    //     }
    // }, [sec])


    // const counter = () => {
    //     if (sec > 0) {
    //         setTimeout(() => {
    //             SetSec(sec - 1)
    //         }, 1000)
    //     }
    // }
    let x = window.location.pathname.split('/');
    let dataToMap;
    useEffect(() => {
        console.log(x[2])
        if (x[2] == "protein" && x[3] != 'undefined') {
            if (props.myState.length == 0) {
                props.getProtein()
            }
        }
        else if (x[2] == 'fatburner' && parseInt(x[3]) != 'undefined') {
            if (props.fatState.length == 0) {
                props.getFatBurners()
            }
        }
        else {
            props.history.replace('./')
        }
    }, [])

    if (x[2] == "protein") {
        dataToMap = props.myState
    } else {
        dataToMap = props.fatState
    }



    const selectedElement = dataToMap.filter(ele => {
        if (props.match.params.id == ele.id) {
            console.log(props, ele, props.match.params.id)
            return ele
        }
    })

    let seEle = selectedElement;


    const rowStyle = {
        margin: '0px'
    }



    // Image zoom begin
    let magnifier;
    if (selectedElement.length > 0) {

        {
            window.screen.width > 480 ?
                magnifier = <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        sizes: '(max-width: 480px) 30vw, (max-width: 1200px) 10vw, 360px',

                        src: seEle[0].img,

                    },
                    largeImage: {
                        src: seEle[0].img,
                        width: 1800,
                        height: 1800,
                    },
                    enlargedImageClassName: Classes.Largeimage,
                    enlargedImageContainerDimensions: {
                        width: '215%',
                        height: '100%',
                    },
                    enlargedImageContainerStyle: {
                        border: 'none',
                        boxShadow: 'none',
                        marginLeft: '18px'
                    },
                    enlargedImageContainerClassName: Classes.Largeimage,
                    enlargedImagePosition: 'beside',
                    isActivatedOnTouch: true,
                    isHintEnabled: true,
                }} />
                :
                magnifier = <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        // isFluidWidth: true,
                        // src: selectedElement[0].img,
                        sizes: '(max-width: 480px) 30px, (max-width: 1200px) 30px, 360px',
                        width: 300,
                        height: 300,
                        src: seEle[0].img,
                    },
                    largeImage: {
                        // src: selectedElement[0].img,
                        width: 1000,
                        height: 1000,
                        zIndex: 100,
                        src: seEle[0].img,
                    },
                    enlargedImageContainerDimensions: {
                        width: '250%',
                        height: '100%',
                        zIndex: 100
                    },
                    enlargedImageContainerStyle: {
                        border: 'none',
                        boxShadow: 'none'
                    },
                    enlargedImagePosition: 'over',
                    isActivatedOnTouch: true,
                    isHintEnabled: true,
                    isEnlargedImagePortalEnabledForTouch: true
                }} />
        }

    }

    // Image zoom end




    return (
        <div>
            <Navbar />
            {
                selectedElement.length >= 1 ?
                    <div className={Classes.divstyle}>
                        <Container fluid={true}>
                            <Card style={{ marginTop: '12vh' }}>
                                <Row style={rowStyle}>
                                    <Col sm={4} style={{ borderRight: '1px solid lightgrey' }}>
                                        <div style={{ marginTop: '3vh', marginBottom: '3vh' }}>
                                            {magnifier}
                                            <div style={{ display: 'flex', marginTop: '3vh' }}>
                                                <Button>Add to Cart</Button>
                                                <Button style={{ marginLeft: '50%' }}
                                                    variant="success">
                                                    Buy Now</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <Container >
                                            {/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className={Classes.headtabs}>
                                                <Tab eventKey="home" title="Details" className={Classes.mytabs}>
                                                    <div>
                                                        <h5>{seEle[0].brand}</h5>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="Description" title="Description" className={Classes.mytabs}>
                                                    {seEle[0].price}
                                                </Tab>
                                            </Tabs> */}
                                            <>
                                                <style type="text/css">
                                                    {`
                                                        .nav-tabs{
                                                            margin-bottom:5vh;
                                                            margin-top:2vh;
                                                            border-bottom: 1px solid lightgrey;
                                                        }
                                                        .nav-tabs .nav-link.active {
                                                            color: green;
                                                            background-color: #fff;
                                                            border: none;
                                                            outline:none;
                                                            border-bottom: 1px solid green;
                                                        }
                                                        .nav-tabs .nav-link {
                                                            color: #495057;
                                                            background-color: #fff;
                                                            border: none;
                                                            outline:none;
                                                            border-bottom: 1px solid lightgrey;
                                                        }
                                                        `}
                                                </style>
                                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                                    <Tab eventKey="home" title="Details">
                                                        <div >
                                                            <h5 style={{ width: '60%' }}>{seEle[0].text}</h5>
                                                            <div style={{ display: 'flex' }}>
                                                                <h5>Brand :</h5>
                                                                <p> {seEle[0].brand}</p>
                                                            </div>
                                                            <div style={{ display: 'flex' }}>
                                                                <h5>Flavor :</h5>
                                                                <p>{seEle[0].Flavour}</p>
                                                            </div>
                                                            <div style={{ display: 'flex' }}>
                                                                <h5>Weight :</h5>
                                                                <p>{seEle[0].weight}</p>
                                                            </div>
                                                            <div style={{ display: 'flex', }}>
                                                                <div style={{ display: 'flex', flex: '50%' }}>
                                                                    <h5>price :</h5>
                                                                    &nbsp;&nbsp;<h5 style={{ textDecoration: 'line-through', color: 'grey' }}><i className="fa fa-rupee" ></i>{seEle[0].previous}</h5>
                                                                    &nbsp;&nbsp;<h5 ><i className="fa fa-rupee" ></i>{seEle[0].price}</h5>
                                                                </div>
                                                                {/* <div style={{ display: 'flex', flex: "50%" }}>
                                                                    <p> Previous Price:</p><h5 style={{ textDecoration: 'line-through', color: 'grey' }}><i className="fa fa-rupee" ></i>{seEle[0].previous}</h5>
                                                                </div> */}

                                                            </div>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Description" title="Description" className={Classes.mytabs}>
                                                        <div >
                                                            {seEle[0].productDescription}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </>
                                            {/* <Accordion defaultActiveKey="0" bsPrefix={Classes.mytabs}>
                                                <Card bsPrefix={Classes.card}>
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h5>Product Details</h5>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>
                                                            <div>
                                                                <h5>{seEle[0].text}</h5>
                                                                <h5>Brand : {seEle[0].brand}</h5>
                                                                <p>Flavor: {seEle[0].Flavour}</p>
                                                                <p>Weight: {seEle[0].weight}</p>
                                                                <div style={{ display: 'flex', }}>
                                                                    <div style={{ display: 'flex', flex: '50%' }}>
                                                                        <p>price :</p><h5 ><i className="fa fa-rupee" ></i>{seEle[0].price}</h5>
                                                                    </div>
                                                                    <div style={{ display: 'flex', flex: "50%" }}>
                                                                        <p> Previous Price:</p><h5 style={{ textDecoration: 'line-through', color: 'grey' }}><i className="fa fa-rupee" ></i>{seEle[0].previous}</h5>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                                <Card className={Classes.card}>
                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <h6>Product Description</h6>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="1">
                                                        <Card.Body>
                                                            <p>{seEle[0].productDescription}</p>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                            </Accordion> */}
                                        </Container>
                                    </Col>


                                </Row>
                            </Card>
                        </Container>

                        <Jumbotron style={{
                            marginTop: '2rem',
                            marginBottom: '0rem',
                            backgroundColor: '#343a40',
                            color: 'white',
                            borderRadius: '0px',
                            bottom: 0,
                            width: '100%'
                        }}>
                            <Row>
                                <Col sm={4}>
                                    <h6>all rights reserved @ NutrimMart</h6>
                                </Col>
                                <Col sm={4}>
                                    {/* <h6>all rights reserved @ NutrimMart</h6> */}
                                </Col>
                                <Col sm={4}>
                                    <h6>social Links</h6>
                                </Col>
                            </Row>

                        </Jumbotron>

                    </div>
                    : <div style={{ height: '100vh', width: '100vw', marginLeft: '1vw', backgroundColor: 'white', marginTop: '20vh', position: 'fixed' }}>
                        <Loader />
                        <p style={{ textAlign: 'center' }}>Fetching Products,Please wait</p>
                    </div>
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        myState: state.pro.protein,
        product: state.pro.selectedProduct,
        fatState: state.fat.fatburner,
        // profat: state.pro.fatburner
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProtein: () => {
            dispatch({ type: constants.GET_PROTEIN_DATA });
        },
        getFatBurners: () => {
            dispatch({ type: fatconstants.GET_FATBURN_DATA });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);