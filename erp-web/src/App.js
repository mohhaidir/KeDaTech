import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Pricing, Contact } from './pages'
// import './assets/scss/styles.css';

const routes = [
  {
    exact:true,
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/pricing',
    component: Pricing
  },
  {
    path: '/contact',
    component: Contact
  }
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
