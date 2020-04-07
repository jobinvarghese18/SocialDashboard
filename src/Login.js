import   React from 'react'
import Axios from 'axios'

import {Redirect} from 'react-router-dom'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            user:[],
            userName:'',
            flag:false,
            status:false,
            userId:'',
            name:'',
            companyName:'',
            phone:''
            
        }
    }
    handleBlur = () =>{

        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            response.data.map((user)=>{

                if(user.email===(this.state.userName)){
                    const flag = true 
                    const userId = user.id
                    const name = user.name
                    const companyName = user.company.name
                    const phone  = user.phone
                    return(
                        this.setState({phone,name,companyName,userId,flag})
                        
                    ) 
                    
                   
                }
                
                else{
                    const status = false 
                    return(
                        this.setState({status})
                    ) 
                    
                }
                
               
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(this.state.flag)
        console.log(this.state.userId)
                   
    }
    handleInput = (e)=>{
                const userName = e.target.value
                localStorage.setItem('userName',userName)
                this.setState({userName})
                const flag =false
                this.setState({flag})
    }
    componentWillUnmount(){
        localStorage.removeItem("userName")
        let userName=''
        this.setState({userName})
    }
    componentDidMount(){
        
      let   userName = localStorage.getItem("userName")
        this.setState({userName})
    }
    render(){
        console.log(this.state.companyName)
        return (
          
            <div>
                <h1>Login</h1>
                
               
                {this.state.flag?<Redirect to={{
                    pathname:'/PostShowLogin',
                    state : {
                        email:this.state.userName,
                        userId:this.state.userId,
                        companyName:this.state.companyName,
                        name:this.state.name,
                        phone:this.state.phone
                    }
                }} />:'' }
                
                <input type="text"  value={this.state.userName}onBlur={this.handleBlur} onChange={this.handleInput}/>
                
            </div>
           
           


        )
    }
}
export default Login