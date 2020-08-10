import React, {useState, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setIsLogged(true)
    }
    setLoading(false)
  }, [])

  return (
    <>
    {
      loading ? `` : (
        <Route {...rest} render={
          props => (
            isLogged ? <Component {...props} /> : <Redirect to='/' />
          )
        } />
      )
    }
    </>
  )
}


export default PrivateRoute;