import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import Itemcard from '../../../components/itemcard/itemcard';
import { Col, Row, Container, InputGroup, } from 'react-bootstrap';
import Filter from '../../../components/Filters/filters';
import Paginate from '../../../components/Pagination/Paginations';
import Classes from './protein.module.css';
import { connect } from 'react-redux';
import * as constants from './constants/constants';
import * as actions from './actions/actions'

const Protein = (props) => {
    const [brandfilter, setBrandFilter] = React.useState([]);
    const [pricefilter, setPriceFilter] = React.useState(0);
    const [pageStart, setPageStart] = React.useState(0);
    const [pageEnd, setPageEnd] = React.useState(12);
    // const [ProtienData, setProteinData] = React.useState([]);
    let p = props.myState;

    useEffect(() => {
        console.log(pageStart, pageEnd, "hbs")
        setPageStart(pageStart)
        setPageEnd(pageEnd)
    }, [pageStart, pageEnd]);


    useEffect(() => {
        if (p.length == 0) {
            props.getProtein();
            console.log(props.myState, p)
        }
    }, []);

    let protienData =
        [
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 3299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "Muscle Blaze", img: "https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 1899, previous: 2299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
            { brand: "ON", img: "https://nutrabay.com/wp-content/uploads/2020/04/NB-OPT-1020-07.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 3299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 2999, previous: 1299 },
            { brand: "MusclePharm", img: "https://www.guardian.in/media/catalog/product/cache/9ac0fc91e17bc5a4f6ddbec2477b48d3/9/0/90200005-1.jpg", text: "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", price: 999, previous: 1299 },
        ]

    let dataToPaginate = protienData;
    let prices = [];
    const selectItemsPerPage = protienData.slice(pageStart, pageEnd);

    const proteinRow = selectItemsPerPage.map((ele, index) => {
        if (prices.indexOf(ele.price) == -1) {
            prices.push(ele.price)
        }
        return (
            <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                <Itemcard
                    img={ele.img}
                    text={ele.text}
                    price={ele.price}
                    prevPrice={ele.previous}
                />
            </Col>
        )
    })
    let minprice = Math.min(...prices);
    let maxprice = Math.max(...prices);

    let filteredBrand = [];
    let priceFilter = protienData.map((ele, index) => {
        if (filteredBrand.indexOf(ele.brand) == -1) {
            filteredBrand.push(ele.brand)
        }
    })

    //  Creating checkbox component for unique brand names
    let mapFilterBrand = [];
    if (filteredBrand.length > 1) {
        mapFilterBrand = filteredBrand.map((ele, index) => {
            return (
                <InputGroup className="mb-3" className={Classes.checkbox}>
                    <InputGroup.Checkbox
                        label={ele}
                        value={ele}
                        onChange={(ele) => selectBrand(ele)}
                    />{ele}
                </InputGroup>
            )
        })
    }

    // Setting the selected brands in the state
    let x = [...brandfilter]
    const selectBrand = (ele) => {
        console.log(ele.target.value)
        if (brandfilter.indexOf(ele.target.value) == -1) {
            x.push(ele.target.value)
            setBrandFilter(x)
        }
        else if (brandfilter.indexOf(ele.target.value) != -1) {
            x.splice(x.indexOf(ele.target.value), 1)
            setBrandFilter(x)
        }
    }

    // setting the Price Range in state
    const selectprice = (e) => {
        if (pricefilter != e.target.value) {
            setPriceFilter(e.target.value)
            console.log(e.target.value)
        }
        else {
            setPriceFilter()
        }
    }

    let mappedResult = protienData.map((ele, index) => {
        if (brandfilter.indexOf(ele.brand) != -1) {
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
    })

    let mixmappedResult = protienData.map((ele, index) => {
        if (brandfilter.length > 0 && pricefilter) {
            if (brandfilter.indexOf(ele.brand) != -1) {
                if (pricefilter == 0 && ele.price > 0) {
                    return (
                        <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                            <Itemcard
                                img={ele.img}
                                text={ele.text}
                                price={ele.price}
                                prevPrice={ele.previous}
                            />
                        </Col>
                    )
                }
                else if (pricefilter <= 500 && ele.price < 500) {
                    if (Object.keys(ele).length > 0) {
                        return (
                            <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                                <Itemcard
                                    img={ele.img}
                                    text={ele.text}
                                    price={ele.price}
                                    prevPrice={ele.previous}
                                />
                            </Col>
                        )
                    }
                }
                // && ele.price > 500
                else if (pricefilter > 500 && pricefilter <= 1000 && ele.price < 1000 && ele.price > 500) {
                    if (Object.keys(ele).length > 0) {
                        return (
                            <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                                <Itemcard
                                    img={ele.img}
                                    text={ele.text}
                                    price={ele.price}
                                    prevPrice={ele.previous}
                                />
                            </Col>
                        )
                    }
                }
                // ele.price > 1000 &&
                else if (pricefilter > 1000 && pricefilter < 2500 && ele.price < 2500 && ele.price > 1000) {
                    if (Object.keys(ele).length > 0) {
                        return (
                            <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                                <Itemcard
                                    img={ele.img}
                                    text={ele.text}
                                    price={ele.price}
                                    prevPrice={ele.previous}
                                />
                            </Col>
                        )
                    }
                }
                else if (pricefilter >= 2500 && ele.price > 2500) {
                    // if (Object.keys(ele).length > 0) {
                    return (
                        <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                            <Itemcard
                                img={ele.img}
                                text={ele.text}
                                price={ele.price}
                                prevPrice={ele.previous}
                            />
                        </Col>
                    )
                }
            }
        }
        else {
            return proteinRow
        }
    })

    const priceMappedResult = protienData.map((ele, index) => {

        if (pricefilter == 0 && ele.price > 0) {
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
        if (pricefilter <= 500 && ele.price < 500) {
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
        // && ele.price > 500
        if (pricefilter > 500 && pricefilter <= 1000 && ele.price < 1000 && ele.price > 500) {
            // console.log(ele)
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
        // && ele.price > 1000
        if (pricefilter > 1000 && pricefilter < 2500 && ele.price < 2500 && ele.price > 1000) {
            // console.log(ele)
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
        if (pricefilter >= 2500 && ele.price > 2500) {
            console.log(ele)
            return (
                <Col sm={3} key={index} style={{ marginTop: '20px' }}>
                    <Itemcard
                        img={ele.img}
                        text={ele.text}
                        price={ele.price}
                        prevPrice={ele.previous}
                    />
                </Col>
            )
        }
    })
    const dataToDisplay = () => {
        let pagearr = []
        if (brandfilter.length > 0 && !pricefilter) {
            for (let i = 0; i < mappedResult.length; i++) {
                if (mappedResult[i] != undefined) {
                    pagearr.push(mappedResult[i])
                }
                dataToPaginate = pagearr

            }
            return pagearr.slice(pageStart, pageEnd)
        }
        else if (brandfilter.length <= 0 && pricefilter) {
            for (let i = 0; i < priceMappedResult.length; i++) {
                if (priceMappedResult[i] != undefined) {
                    pagearr.push(priceMappedResult[i])
                }
                dataToPaginate = pagearr

            }
            return pagearr.slice(pageStart, pageEnd)
        }
        else if (brandfilter.length > 0 && pricefilter) {
            let b = mixmappedResult.filter((ele, index) => {
                if (ele != undefined)
                    return ele
            })
            console.log(b.length, "result")
            if (b.length > 0) {
                for (let i = 0; i < mixmappedResult.length; i++) {
                    if (mixmappedResult[i] != undefined) {
                        pagearr.push(mixmappedResult[i])
                    }
                    dataToPaginate = pagearr

                }
                return pagearr.slice(pageStart, pageEnd)
                // return mixmappedResult
            } else {
                dataToPaginate = [0]
                return <h5 style={{ margin: '0 auto', marginTop: '30vh' }}>Oops!! item not found</h5>
            }
        }
        else {

            return proteinRow
        }
    }
    const changePage = (e) => {
        console.log(typeof (e.target.innerHTML))
        let selectedPage = parseInt(e.target.innerHTML)
        if (e.target.innerHTML == 1) {
            setPageStart(0);
            setPageEnd(12)
            console.log(pageStart, pageEnd, "Ps")
        }
        else if (e.target.innerHTML > 1) {
            // console.log((e.target.innerHTML - 1) * 12, "st");
            // console.log((e.target.innerHTML * 12), "en")
            setPageStart((e.target.innerHTML - 1) * 12);
            setPageEnd((e.target.innerHTML * 12));
            console.log(pageStart, pageEnd, "Ps")
        }
    }

    const sendRequest = () => {
        props.getProtein();
    }



    return (
        <div>
            <Navbar />
            {console.log(props.myState)}
            <Container fluid={true} style={{ marginTop: '56px' }}>
                <button onClick={sendRequest}>get-Data</button>
                <Row>
                    <Col sm={2} style={{ height: '100%', position: 'fixed', boxShadow: '0px 0px 2px 2px silver' }}>
                        <h5 style={{ textAlign: 'center', marginTop: '3vh' }}>Filters</h5>
                        <Filter
                            title1="Brand"
                            title2="price"
                            brandData={mapFilterBrand}
                            clicked={(e) => selectprice(e)}
                            minprice={minprice}
                            maxprice={maxprice}
                            pricefilter={pricefilter}
                        />
                    </Col>
                    <Col sm={10} style={{ marginLeft: '16.33vw', position: 'relative' }}>
                        <div style={{ marginTop: '5vh', position: 'relative !important' }}></div>
                        <Row>
                            {dataToDisplay()}
                            {/* {brandfilter.length > 0 && !pricefilter ? mappedResult : fatburnerRow} */}
                        </Row>
                        {/* {Paginations} */}

                        <div style={{ marginLeft: '44%', marginTop: '5%' }}>
                            <Paginate
                                pageStart={pageStart}
                                Data={dataToPaginate}
                                clicked={(e) => changePage(e)}
                            />
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myState: state.pro.protein
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProtein: () => {
            dispatch({ type: constants.GET_PROTEIN_DATA });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protein);