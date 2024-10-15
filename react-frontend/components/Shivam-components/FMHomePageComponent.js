import React, { Component } from 'react';
import background from '../images/farm.jpg'

class FMHomePageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
              
        }

        this.loginHandler = this.loginHandler.bind(this);
               
    }

    loginHandler ()
    { 
        this.props.history.push('/login');
    }
    render() {
        const myStyle={
            backgroundImage: `url(${background})`,
            width: '230vh',
            height:'100vh',
            marginTop:'-10px',
            marginLeft: '-210px',
            fontColor: 'red',
            backgroundSize: 'cover'
        };
        const noteStyle={
        fontWeight:'bold', fontSize:'20px', color: 'red',  textAlign: 'center'
        }

        return (

            
            <div>
                <div style={myStyle}>
                
                
                  <h2 className="text-center" style={{color:'red', marginTop:'10px'}}>Farm Management System  </h2>
                  <br></br>

                  <div> 
                    <form OnSubmit= {this.handleSubmit}>
                       
                    <br></br>   
                    
                    <h3 className="text-center" style={{fontWeight:'bold', fontSize:'25px', color: 'white', textPadding:'20px'}}>  WELCOME to FARM MANAGEMENT SYSTEM </h3>
                    <h3  style={noteStyle}>  A tool for farmers to look at the crops, equipments and pesticides related information.</h3>
                    <h3 style={noteStyle}>  It can help in deciding which crop to plan in which season! </h3>
                    <h3 style={noteStyle}>  what are the equipments that can be used to speed up farming activities!  </h3>
                    <h3 style={noteStyle}>  Look at various Insecticides to protect farm products!  </h3>
                    <tr>
                        <td>
                        <br></br> 
                        
                        <button className="B1  btn-primary" style={{marginLeft: "750px"}} onClick={this.loginHandler}> Sign In </button>
                        </td>
                    </tr>
                    </form>
                </div>
            </div>
        </div>    
        );
    }
}
    export default FMHomePageComponent;