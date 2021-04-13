import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { authSelectors } from 'redux/auth'

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthUser)
    return <Route
        {...routeProps}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
        }
    />
}

PrivateRoute.defaultProps = {
    redirectTo: '/'
}

export default PrivateRoute