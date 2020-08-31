import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Login } from './pages'
import './assets/scss/styles.scss'

const routes = [
  {
    exact:true,
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
]

const AppRouter = () => (
  <Switch>
    {
      routes.map(route => (
        <Route key={route} {...route} />
      ))
    }
  </Switch>
)

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App;
