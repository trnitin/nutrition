import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';


const Paginations = (props) => {
    let itemPerPage = props.Data.length / 12;
    let active = props.activePage;
    let items = [];
    console.log(props.pageEnd)
    console.log(props.Data.length)

    for (let number = 1; number <= Math.ceil(itemPerPage); number++) {

        if (number == active) {
            items.push(
                <Pagination.Item key={number} active={active} onClick={props.clicked}>
                    {number}
                </Pagination.Item>,
            );
        }
        else {
            items.push(
                <Pagination.Item key={number} onClick={props.clicked}>
                    {number}
                </Pagination.Item>,

            );
        }

    }
    return (
        <div style={{ margin: '0 auto' }}>
            <Pagination>{items}</Pagination>
        </div>
    )
}


export default Paginations;

