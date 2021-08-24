import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import Itemcard from '../../../components/itemcard/itemcard';
import { Col, Row, Container, InputGroup, Button, Card } from 'react-bootstrap';
import Filter from '../../../components/Filters/filters';
import Paginate from '../../../components/Pagination/Paginations';
import Classes from './fatburners.module.css';
import { connect } from 'react-redux';
import * as constants from './constants/constant';
import * as actions from './actions/actions'
import Loader from '../../../components/Loader/loader';



const Pit = (props) => {
    const [brandfilter, setBrandFilter] = React.useState([]);
    const [pricefilter, setPriceFilter] = React.useState(0);
    const [pageStart, setPageStart] = React.useState(0);
    const [pageEnd, setPageEnd] = React.useState(12);
    const [filters, setFilters] = useState({ brand: [], price: 0 })
    const [activePage, setActivePage] = useState(1)

    let p = props.myState;
    console.log(filters, "filters-set");

    useEffect(() => {
        // console.log(pageStart, pageEnd, "hbs")
        setPageStart(pageStart)
        setPageEnd(pageEnd)
    }, [pageStart, pageEnd]);

    useEffect(() => {
        // console.log(pageStart, pageEnd, "hbs")
        setPageStart(0)
        setPageEnd(12)
        setActivePage(1)
    }, [filters]);

    useEffect(() => {
        if (p == undefined || p.length == 0) {
            props.getFatBurners();
        }
    }, []);

    const goToProduct = (ele) => {
        console.log(ele.id)
        // props.setProduct(ele)
        props.history.push('/product/fatburner/' + ele.id)
    }

    let dataToPaginate = p
    let prices = [];
    console.log(p)
    const selectItemsPerPage = p.slice(pageStart, pageEnd);
    const proteinRow = selectItemsPerPage.map((ele, index) => {
        if (prices.indexOf(ele.price) == -1) {
            prices.push(ele.price)
        }
        return (
            <Col sm={3} key={index} style={{ marginTop: '20px' }} >
                <Itemcard click={() => goToProduct(ele)}
                    img={ele.img}
                    text={ele.text}
                    price={ele.price}
                    prevPrice={ele.previous}
                />
            </Col >
        )
    })

    let minprice = Math.min(...prices);
    let maxprice = Math.max(...prices);

    let filteredBrand = [];
    let priceFilter = p.map((ele, index) => {
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
            setFilters(
                {
                    ...filters,
                    brand: [...x]
                }
            )
        }
        else if (brandfilter.indexOf(ele.target.value) != -1) {
            x.splice(x.indexOf(ele.target.value), 1)
            setBrandFilter(x)
            setFilters({
                ...filters,
                brand: [...x]
            })
        }

    }

    // setting the Price Range in state
    const selectprice = (e) => {
        if (pricefilter != e.target.value) {
            setPriceFilter(e.target.value)
            console.log(e.target.value)
            setFilters({
                ...filters,
                price: e.target.value
            })
        }
        else {
            setPriceFilter()
            setFilters({
                ...filters,
                price: 0
            })
        }
    }

    // Matching the conditions set in filters
    let dataFiltered = [];
    if (filters) {
        if (filters.brand.length > 0) {
            for (let i = 0; i < p.length; i++) {
                for (let j = 0; j < filters.brand.length; j++) {

                    if (p[i].brand.indexOf(filters.brand[j]) != -1 && p[i].price <= filters.price && filters.price > 0) {

                        dataFiltered = [...dataFiltered, p[i]]

                    }
                    if (p[i].brand.indexOf(filters.brand[j]) != -1 && p[i].price > 0 && filters.price <= 0) {
                        dataFiltered = [...dataFiltered, p[i]]

                    }
                }
            }
        }
        else if (filters.brand.length == 0 && filters.price > 0) {
            for (let price = 0; price < p.length; price++) {
                if (filters.price == 2500 && p[price].price >= 2500) {
                    dataFiltered = [...dataFiltered, p[price]]
                }
                if (p[price].price <= filters.price && filters.price < 2500) {
                    dataFiltered = [...dataFiltered, p[price]]
                }
            }

        }
    }

    // Looping  matched filter data
    let dispFilteredData = dataFiltered.map((ele, index) => {
        console.log(ele.brand)
        return (
            <Col sm={3} key={index} style={{ marginTop: '20px' }} onClick={() => goToProduct(ele)}>
                <Itemcard
                    img={ele.img}
                    text={ele.text}
                    price={ele.price}
                    prevPrice={ele.previous}
                />
            </Col>
        )
    })


    // returning data based on wether filter set or not
    const dataToDisplay = () => {
        if (filters.brand.length > 0 || filters.price > 0) {
            dataToPaginate = dispFilteredData
            return dataToPaginate.slice(pageStart, pageEnd)
        }
        else {
            return proteinRow
        }

    }

    // Logic to show next set of items when page is changed through pagination
    const changePage = (e) => {
        console.log(typeof (e.target.innerHTML))
        let selectedPage = parseInt(e.target.innerHTML)
        if (e.target.innerHTML == 1) {
            setPageStart(0);
            setPageEnd(12)
            setActivePage(e.target.innerHTML)
            console.log(pageStart, pageEnd, "Ps")
        }
        else if (e.target.innerHTML > 1) {
            // console.log((e.target.innerHTML - 1) * 12, "st");
            // console.log((e.target.innerHTML * 12), "en")
            setPageStart((e.target.innerHTML - 1) * 12);
            setPageEnd((e.target.innerHTML * 12));
            setActivePage(e.target.innerHTML)
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

                            {p == undefined || p.length <= 0 ?
                                <div style={{ height: '100vh', width: '70vw', marginLeft: '1vw', backgroundColor: 'white', position: 'fixed' }}>
                                    <Loader />
                                    <p style={{ textAlign: 'center' }}>Fetching Products</p>
                                </div> :
                                dataToDisplay()
                            }
                        </Row>
                        <div style={{ marginLeft: '44%', marginTop: '5%' }}>
                            <Paginate
                                pageStart={pageStart}
                                Data={dataToPaginate}
                                clicked={(e) => changePage(e)}
                                activePage={activePage}
                                pageEnd={pageEnd}
                                filter={filters}
                            />
                        </div>
                        {console.log(props.myState, "myproduct")}
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myState: state.fat.fatburner,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFatBurners: () => {
            dispatch({ type: constants.GET_FATBURN_DATA });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pit);