import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import AuthContext from './helpers/AuthContext'

import 'reset-css'
import './styles/styles.scss'

ReactDOM.render(<AuthContext><App /></AuthContext>, document.querySelector('#root'))