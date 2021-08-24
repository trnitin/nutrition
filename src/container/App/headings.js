import React from 'react';
import Itemcard from '../../components/itemcard/itemcard'
import Navbar from '../../components/Navbar/Navbar'

const headings = (props) => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '60px' }}>
                <Itemcard
                    img=""
                    text="cxdfdd"
                    price={200}
                    prevPrice={300}
                />
            </div>

        </div>
    )
}

export default headings
