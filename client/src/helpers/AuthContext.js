import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()

export default ({ children }) => {
  // retreive any existing tokens from localStorage
  const getStorageToken = () => {
    return localStorage.getItem('authToken')
  }
  
  // if no existing token, set the existing token value to empty string
  const checkPrevToken = (prevToken) => {
    if (prevToken === null) {
      return ''
    }
    return prevToken
  }

  let prevToken = getStorageToken()
  let token = checkPrevToken(prevToken)

  // if exisitn token value is an empty string, then return false
  // otherwise, return true, this is the check for return auth.authed
  const isAuth = () => {
    if (token === '') {
      return false
    } else {
      return true
    }
  }

  // create the inital auth object to pass to the context provider
  const authObject = {
    authed: isAuth(),
    token: token
  }
  
  const [auth, setAuth] = useState(authObject)

  // as a side effect of auth being updated, also update the 
  // localStorage with the new value
  useEffect(
    () => {
      localStorage.setItem('authToken', auth.token)
    }, [auth]
  )

  const defaultContext = {
    auth,
    setAuth
  }

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  )
}