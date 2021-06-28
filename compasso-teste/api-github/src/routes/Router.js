import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from '../pages/SearchPage/SearchPage'
import ReposPage from '../pages/ReposPage/ReposPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'
import StarredPage from '../pages/StarredPage/StarredPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'

const Router = () => {
    
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={"/"}>
                    <SearchPage/>
                </Route>
                <Route exact path={"/:user"}>
                    <DetailsPage/>
                </Route>
                <Route exact path={`/:user/repos`}>
                    <ReposPage/>
                </Route>
                <Route exact path="/:user/starred">
                    <StarredPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router