import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import Itemcard from '../../../components/itemcard/itemcard';
import Paginate from '../../../components/Pagination/Paginations'
import { Col, Row, Container, InputGroup, Pagination } from 'react-bootstrap';
import Filter from '../../../components/Filters/filters'
import Classes from './fatburners.module.css';



const Fatburner = (props) => {

    const [brandfilter, setBrandFilter] = React.useState([]);
    const [pricefilter, setPriceFilter] = React.useState(0);
    const [pageStart, setPageStart] = React.useState(0);
    const [pageEnd, setPageEnd] = React.useState(12);

    useEffect(() => {
        console.log(pageStart, pageEnd, "hbs")
        setPageStart(pageStart)
        setPageEnd(pageEnd)
    }, [pageStart, pageEnd]);



    const fatburnerData =
        [
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen11", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech11", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen11", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech11", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Evogen11", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech11", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "Muscle Blaze", img: "https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", text: "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", price: 900, previous: 1299 },
            { brand: "Evogen11", img: "https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", text: "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", price: 2600, previous: 3500 },
            { brand: "MuscleTech11", img: "https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", text: "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", price: 2000, previous: 3000 },
            { brand: "Muscle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
            { brand: "  cle Blaze", img: "https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", text: "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", price: 410, previous: 599 },
        ]

    let dataToPaginate = fatburnerData;
    // Loopinf and displaying all elements

    let prices = [];
    const selectItemsPerPage = fatburnerData.slice(pageStart, pageEnd);
    // console.log(selectItemsPerPage, pageStart, pageStart, "fg")
    const fatburnerRow = selectItemsPerPage.map((ele, index) => {
        if (prices.indexOf(ele.price) == -1) {
            prices.push(ele.price)
        }
        console.log(ele.length, "first length")
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

    // Getting unique brand names for brand filter
    let filteredBrand = [];
    let priceFilter = fatburnerData.map((ele, index) => {
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


    // filtering and displaying selected brands

    let mappedResult = fatburnerData.map((ele, index) => {
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

    // filtering and displaying selected brands and price


    let mixmappedResult = fatburnerData.map((ele, index) => {
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
            return fatburnerRow
        }
    })



    // filtering and displaying selected  and price
    const priceMappedResult = fatburnerData.map((ele, index) => {

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


    // Displaying data based on filter selected or not

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

            return fatburnerRow
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



    return (
        <div>
            <Navbar />
            <Container fluid={true} style={{ marginTop: '56px' }}>
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

export default Fatburner;