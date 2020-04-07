import React from 'react'
import Axios from 'axios'
// import {Redirect} from 'react-router-dom'



class PostShowLogin extends React.Component {
    constructor(){
        super()
        this.state = {
         userId:'',
         Posts:[],
         companyName:'',
         email:'',
         phone:''
        }
    }
    componentDidMount(){
      const {phone,userId,name,companyName,email} =this.props.location.state
      this.setState({phone,userId,name,companyName,email})
      Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response)=>{
          const Posts = response.data
          this.setState({Posts})
      })
      .catch((err)=>{
          console.log(err)
      })
        
        
    }
    handleClick = ()=>{

      
            this.props.history.push("/")
        
       

    }
    render(){
        return(
           <div>
               <h1>Name:{this.state.name}</h1>
               <h2>Email:{this.state.email}</h2>
               <h3>Phone:{this.state.phone}</h3>
               <h3 align='right'>Company Name:{this.state.name}</h3>
               <ul>
               {this.state.Posts.map(post=>{
                    return (
                        <div>
                        <li><h3>{post.title}</h3></li>
                        <li>{post.body}</li>
                        </div>
                        
                    )
                })}
               </ul>
               <button onClick={this.handleClick}>Logout</button>
              
           </div>
        )
    }
}
export default PostShowLogin