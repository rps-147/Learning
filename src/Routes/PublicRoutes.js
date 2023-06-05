import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes= () => {
    let auth = {'token':false}
    return(
        !auth.token ? <Outlet/> : <Navigate to="/dashboard"/>
    )
}

export default PublicRoutes