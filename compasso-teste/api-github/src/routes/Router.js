import React, { useState } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from '../pages/SearchPage/SearchPage'
import ReposPage from '../pages/ReposPage/ReposPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'
import StarredPage from '../pages/StarredPage/StarredPage'

const Router = () => {
    const [search, setSearch] = useState('') 
    
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={"/"}>
                    <SearchPage search={search} setSearch={setSearch}/>
                </Route>
                <Route exact path={`/user/:user/repos`}>
                    <ReposPage search={search} setSearch={setSearch}/>
                </Route>
                <Route exact path="/user/:user/starred">
                    <StarredPage search={search} setSearch={setSearch}/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router