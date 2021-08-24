import React from 'react'
import LandingPage from './LandingPage'
import { Route, Switch } from 'react-router-dom'
import Headings from './headings'
import Protein from './Proteins/protein';
import Pit from './Proteins/Pit';
import Fit from './Fatburners/Fit'
import Product from '../../components/Product/Product'

import Fatburner from './Fatburners/Fatburners';

const main = (props) => {
    return (
        <div>
            <Switch>
                <Route path='/'
                    exact
                    component={LandingPage}
                />
                <Route path='/protein'
                    exact
                    component={Pit}
                />
                <Route path='/fatburner'
                    exact
                    component={Fit}
                />
                {/* <Route path='/product:id'
                    exact
                    component={Product}
                /> */}
                <Route path={'/product' + '/:text' + '/:id'}
                    exact
                    component={Product}
                />
                <Route
                    // component={NoMatch}
                    render={() => (<h4>does not exist</h4>)}
                />
            </Switch>

        </div>
    )
}

export default main