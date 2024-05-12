import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouteTutor = ({isLogged}) => {
    return(
      isLogged ? <Outlet/> : <Navigate to="/logintutor"/>
    )
}

export default PrivateRouteTutor