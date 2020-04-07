import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Login from './Login'
import PostShowLogin from './PostShowLogin'

function MainHome(props) {
return (
    <BrowserRouter>
    <div>
      

      <Route path='/'  component={Login}  exact ={true}/>
      <Route path='/PostShowLogin' component={PostShowLogin}/>
    </div>
    </BrowserRouter>
)
}
export default MainHome