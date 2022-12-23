
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '@/main/factories/pages'
import React from 'react'

const Router: React.FC = () => {
  return (

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />

        </Switch>
      </BrowserRouter>

  )
}

export default Router
