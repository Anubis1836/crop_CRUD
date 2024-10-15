import React, { Component } from 'react';

 
import styled from "styled-components";

const Button = styled.button`
border: 2px solid palevioletblack;
  border-radius: 3px;
background-color pink;
color blue`

const WhiteButton = styled.button`
border: 2px solid palevioletblack;
  border-radius: 3px;
   
border rounded;
background-color cyan;
 `

 

class MainPageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
          
        }
        
        
        this.listEquipments=this.listEquipments.bind(this);
        this.listInsecticides=this.listInsecticides.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    listCrops ()
    {
        this.props.history.push('/listcrops'); 
    }

    listEquipments ()
    {   
       this.props.history.push('/listequipments');
    }

    listInsecticides ()
    {
        this.props.history.push('/listinsecticides'); 
    }

    logOutHandler ()
    {
        this.props.history.push('/');      
    }
    
  
    componentDidMount()
    {

        console.log(this.context)

    }
   
    
    
    render() {
        return (
            <div>   
                
                <h2 className="text-center">FMS Main Page</h2>
                <br></br>
                <br></br>
                <div className = "row">
                    
                <table className = "table table-striped table-bordered "> 
                <tbody>
                    <button className="btn btn-primary" onClick={ () => this.listCrops()}> Crops </button>
                    
                    <button style={{marginLeft: "20px"}} className="btn btn-primary" onClick={ () => this.listEquipments()}> Equipments </button>
                    <button style={{marginLeft: "20px"}} className="btn btn-primary" onClick={ () => this.listInsecticides()}> Insecticides </button>
                    
                    
                    <button className="btn btn-danger" style={{marginLeft: "170px"}} onClick={this.logOutHandler}> Log out </button>
                     
                     
                  
                     
                    

                   <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href=" https://agricoop.nic.in/en/divisionalwebsite/department-agricultural-research-and-education" target="_blank" > <Button>Department of Agriculture and Farmers Welfare </Button> </a></tr>

                    <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href=" https://farmer.gov.in/#" target="_blank" > <Button> Farmers' Portal - One Stop Shop For Farmers </Button> </a></tr>

                   
                    <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href=" https://ruralmarketing.in/stories/11-government-schemes-in-agriculture-that-every-farmer-need-to-know/" target="_blank" ><Button> Government Schemes in Agriculture</Button> </a></tr>
                    
                    <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href=" https://www.india.gov.in/topics/agriculture" target="_blank" > <Button>Agricultural Services and Schemes </Button></a></tr>

                    <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href="https://indiaagronet.com/Agriculture-websites.html" target="_blank"> <Button>Agriculture Websites Reposirtory  </Button> </a></tr>  
                                      

                    <tr style={{color:'white' }}> empty row </tr>
                    <tr><a href=" https://mausam.imd.gov.in/" target="_blank" > <WhiteButton>Weather </WhiteButton></a></tr>

                    

                    </tbody>
               </table>
              
            </div>
            </div>
        );
    }
}

export default MainPageComponent;


