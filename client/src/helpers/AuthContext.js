import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()

export default ({ children }) => {
  let prevAuth = localStorage.getItem('token') || false
  if (prevAuth === 'false') { prevAuth = JSON.parse(prevAuth)}
  const [token, setToken] = useState(prevAuth)

  useEffect(
    () => {
      localStorage.setItem('token', token)
    }, [token]
  )

  const defaultContext = {
    token,
    setToken
  }

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  )
}