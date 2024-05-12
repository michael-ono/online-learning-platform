import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouteUser = ({isLogged}) => {
    return(
      isLogged ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRouteUser