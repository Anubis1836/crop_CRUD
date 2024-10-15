import React, { Component } from 'react';
import FMService from '../services/FMService'
import UserContext from './UserContext';

class ListEquipmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FMEquipment: []
        }
        this.lUser = '';

        this.addEquipment = this.addEquipment.bind(this);
        this.deleteEquipment = this.deleteEquipment.bind(this);
        this.editEquipment = this.editEquipment.bind(this);
        this.listCrops = this.listCrops.bind(this);
        this.listInsecticides = this.listInsecticides.bind(this);
        this.mainPageHandler = this.mainPageHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    listCrops ()
    {
        this.props.history.push('/listcrops'); 
    }

    listInsecticides ()
    {
        this.props.history.push('/listinsecticides'); 
    }
    addEquipment ()
    {
         this.props.history.push('/addequipment/_add'); 
    }
    editEquipment(id){
        this.props.history.push(`/addequipment/${id}`);
    }
    deleteEquipment(id){
        FMService.deleteEquipment(id).then( res => {
            this.setState({FMEquipment: this.state.FMEquipment.filter(fmeq => fmeq.id !== id)});
        });
    }
    static contextType = UserContext;
    getAdd()
    {
        console.log('in getAdd')
        if (this.lUser === 'admin')
            return <button style = {{marginLeft: "410px"}} className="btn btn-primary" onClick={ this.addEquipment}> Add Equipment </button>
        
    }   
    getActions()
    {
        console.log('in getActions')
        if (this.lUser === 'admin')
            return <th> Actions </th>
    }
    getUD(equipmentId)
    {
        if (this.lUser === 'admin')
            return(
            <td>
         
                <button onClick={() => this.editEquipment(equipmentId)} className="btn btn-info">Update </button>
                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEquipment(equipmentId)} className="btn btn-danger">Delete </button>
   
            </td>
        
            )
    }
    getUser(fmUser)
    {
        this.lUser = fmUser;

        console.log('in get user ' + fmUser);
    }
    componentDidMount()
    {
    
        FMService.getEquipments().then((res) => {
            this.setState({FMEquipment: res.data});
            console.log (res.data)
        });
        
    }
    mainPageHandler ()
    {
        this.props.history.push('/MainPage');      
    }
    logOutHandler ()
    {
        this.props.history.push('/');      
    }
    render() 
    {
        return (
            <div>
                <UserContext.Consumer>
        {({ user, setUser }) => (
          <div>
            <tr className="text-right" style={{fontWeight:'bold', fontSize:'25px', color: 'red', textPadding:'20px'}}>  WELCOME {user} </tr>
            {this.getUser(UserContext._currentValue.user)}
            {console.log("test  " + UserContext._currentValue.user)}
            {console.log("test Me= " + this.lUser )}
          </div>
        )}
      </UserContext.Consumer>


                <h2 className="text-center">Equipments List</h2>
            

                <div className = "row">
                    <button className="btn btn-primary" onClick={ () => this.listCrops()}> Crops </button>
                    <button style = {{marginLeft: "20px"}} className="btn btn-primary" onClick={ () => this.listInsecticides()}> Insecticides </button>
                    
                    {this.getAdd()}
                    
                    <button className="btn btn-info active" style={{marginLeft: "40px"}} onClick={this.mainPageHandler}> MainPage </button>
                    <button className="btn btn-danger" style={{marginLeft: "140px"}} onClick={this.logOutHandler}> Log out </button>
                    <br></br>
                 </div>
               <div className = "row"> 
               
               <table className = "table table-striped table-bordered">
                <thead>
                                <tr>
                                   
                                    <th> Equipment Name</th>
                                    <th> Price</th>
                                    <th> Details </th>
                                    {this.getActions()}                             
                                </tr>
                </thead>

                <tbody>
                                {
                                    this.state.FMEquipment.map(
                                        FMEquipment =>  
                                        <tr key = {FMEquipment.id}>
                                              
                                             <td> {FMEquipment.eqName}</td>
                                             <td> {FMEquipment.eqPrice}</td>
                                             <td> {FMEquipment.eqDetails}</td>
                                                                                        
                                             {this.getUD(FMEquipment.id)}
                                                                                         
                                        </tr>
                                    )
                                }
                            </tbody>

             </table>  
            </div>    
            </div>
        );
    }
}


export default ListEquipmentComponent;