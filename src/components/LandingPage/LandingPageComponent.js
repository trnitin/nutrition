import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron, ModalFooter } from 'react-bootstrap';
import Itemcard from '../itemcard/itemcard';
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Multislider from '../multiSlider/multislider';
// import Protein from '../../components/Proteins/protein'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const LandingPageComponent = (props) => {
    console.log(props)
    const [name, setName] = useState("nitin")
    console.log(name, "prot")
    const redirectProtein = () => {
        console.log(props, "routing arijit")
        props.history.push('/protein')
    }
    const redirectFatburner = () => {
        console.log(props)
        props.history.push('/fatburner')
    }
    const protienRow = props.protienData.map((ele, index) => {
        return (
            <Col sm={3} key={index} onClick={redirectProtein}>
                <Itemcard
                    img={ele[0]}
                    text={ele[1]}
                    price={ele[2]}
                    prevPrice={ele[3]}
                />
            </Col>
        )
    })
    const fatBurnerRow = props.fatBurnerData.map((ele, index) => {
        return (
            <Col sm={3} key={index} onClick={redirectFatburner}>
                <Itemcard
                    img={ele[0]}
                    text={ele[1]}
                    price={ele[2]}
                    prevPrice={ele[3]}
                />
            </Col>
        )
    })

    const accessories = props.accessories.map((ele, index) => {
        return (
            <Col sm={3} key={index}>
                <Itemcard
                    img={ele[0]}
                    text={ele[1]}
                    price={ele[2]}
                    prevPrice={ele[3]}
                />
            </Col>
        )
    })
    return (
        <div>
            <Navbar />
            <Slider />
            <Container>
                <h4 style={{ textAlign: 'center' }}>Trending Protiens</h4>
                <Row>
                    {protienRow}
                </Row>
            </Container>

            <Container fluid={true} style={{ backgroundColor: 'white' }}>
                <h3 style={{ textAlign: 'center' }}>Bestsellers in Protiens</h3>
                <Multislider
                    data={[
                        ["https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg"],
                        ["https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg"],
                        ["https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg"],
                        ["https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg"],
                    ]}
                />
            </Container>

            <Container>
                <h4 style={{ textAlign: 'center' }}>Trending Fat Burners</h4>
                <Row>
                    {fatBurnerRow}
                </Row>
            </Container>


            <Container fluid={true} style={{ backgroundColor: 'white' }}>
                <h3 style={{ textAlign: 'center' }}>Bestsellers in Fat Burners</h3>
                <Multislider
                    data={
                        ["https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg",
                            "https://nutrabay.com/wp-content/uploads/2020/03/NB-OPT-1002-27-01-510x510.jpg",
                            "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg",
                            "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg"
                        ]
                    }
                />
            </Container>

            <Container>
                <h4 style={{ textAlign: 'center' }}>Trending Accessories</h4>
                <Row>
                    {accessories}
                </Row>
            </Container>


            <Jumbotron style={{
                marginTop: '2rem',
                marginBottom: '0rem',
                backgroundColor: '#343a40',
                color: 'white',
                borderRadius: '0px'
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

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, null)(withRouter(LandingPageComponent));