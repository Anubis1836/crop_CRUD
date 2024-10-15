import React, { Component } from 'react';
import background from '../images/farm.jpg'
import UserContext from './UserContext';

class LoginComponent extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props)

        this.state = {
              username:'',
              password:'',
        }
        this.loginUser = this.loginUser.bind(this);
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
       
    }

    
    loginUser = ()=>{
        console.log(this.state.username);
        console.log(this.state.password);
        if (this.state.username === 'admin')
        {
            if (this.state.password === 'admin')
            {   this.props.history.push('/MainPage');
                this.context.setUser("admin");
            }
                      
        }
        if (this.state.username === 'guest')
        {
            if (this.state.password === 'guest')
            {
                this.props.history.push('/MainPage');
                this.context.setUser("guest");
            }
            
        }
        
    }  

    usernameHandler = (event)=>{
        this.setState({username : event.target.value});
    }

    passwordHandler = (event) =>{
        this.setState({password : event.target.value});
    }
    render() {
        const myStyle={
            backgroundImage: `url(${background})`,
            width: '215vh',
            height:'100vh',
            marginTop:'-10px',
            marginLeft: '-205px',
            fontColor: 'red',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        const noteStyle={
        fontWeight:'bold', fontSize:'18px', color: 'white',background: 'pink',
        }

        return (

            
            <div>
                <div style={myStyle}>
                
                
                  <h2 className="text-center" style={{color:'red'}}>Farm Management System - Login Page </h2>
                  <br></br>

                  <div> 
                    <form OnSubmit= {this.handleSubmit}>
                    
                    <tr>
                         
                        <th style={{color:'red', fontSize:"18px", marginLeft: "100px"}}>  User Name</th>
                        <input type='username' style={{ marginLeft: "30px"}} name='User Name' value={this.state.username} onChange={this.usernameHandler}   />
                          
                    </tr>               
                           <br></br> 
                    <tr>
                        <th style={{color:'red', fontSize:"18px", marginLeft: "10px" }}   > Password </th> 
                        <input type='password' style={{marginLeft: "42px"}}name='Password' value={this.state.password} onChange={this.passwordHandler}  />
                    </tr>
                        <br></br>
                    <tr>
                      
                        <td>
                       
                        <button className="B1  btn-primary" style={{marginLeft: "140px"}} onClick={this.loginUser}> Sign In </button>
                                                  
                        </td>
                    </tr>
                    <br></br>   
                    
                    <tr style={noteStyle}>  Note: Guest user has view rights. Only Admin user has Add, Update, Delete rights. </tr>
                    
                    </form>
                </div>
            </div>
        </div>    
        );
    }
}

export default LoginComponent;

