import React, { Component } from 'react';
import FMService from '../services/FMService'
import UserContext from './UserContext';

class ListInsecticideComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FMInsecticide: []
        }
        this.lUser = '';
        this.addInsecticide = this.addInsecticide.bind(this);
        this.deleteInsecticide = this.deleteInsecticide.bind(this);
        this.editInsecticide = this.editInsecticide.bind(this);
        this.listEquipments = this.listEquipments.bind(this);
        this.listCrops = this.listCrops.bind(this);
        this.mainPageHandler = this.mainPageHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }
    

    listEquipments ()
    {
        this.props.history.push('/listequipments'); 
    }

    listCrops ()
    {
        this.props.history.push('/listcrops'); 
    }
    addInsecticide ()
    {
         this.props.history.push('/addinsecticide/_add'); 
    }
    editInsecticide(inId){
        this.props.history.push(`/addinsecticide/${inId}`);
    }

    deleteInsecticide(id){
        FMService.deleteInsecticide(id).then( res => {
            this.setState({FMInsecticide: this.state.FMInsecticide.filter(fmIn => fmIn.id !== id)});
        });
    }
   
    getAdd()
    {
        console.log('in getAdd')
        if (this.lUser === 'admin')
            return <button style = {{marginLeft: "410px"}} className="btn btn-primary" onClick={ this.addInsecticide}> Add Insecticide </button>
        
    }   
    getActions()
    {
        console.log('in getActions')
        if (this.lUser === 'admin')
            return <th> Actions </th>
    }
    getUD(insecticideId)
    {
        if (this.lUser === 'admin')
            return(
            <td>
         
                <button onClick={() => this.editInsecticide(insecticideId)} className="btn btn-info">Update </button>
                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInsecticide(insecticideId)} className="btn btn-danger">Delete </button>
   
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
        FMService.getInsecticides().then((res) =>  {
            this.setState({FMInsecticide: res.data});
       
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
    render() {
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


                <h2 className="text-center">Insecticides List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={ () => this.listEquipments()}> Equipments </button>
                    <button style = {{marginLeft: "20px"}} className= "btn btn-primary" onClick={ () => this.listCrops()}> Crops </button>
                    
                    {this.getAdd()}
                    
                    <button className="btn btn-info active" style={{marginLeft: "40px"}} onClick={this.mainPageHandler}> MainPage </button>
                    <button className="btn btn-danger" style={{marginLeft: "140px"}} onClick={() => this.logOutHandler()}> Log out </button>
                    <br></br>
                 </div>
               <div className = "row"> 
               
               <table className = "table table-striped table-bordered">
                <thead>
                                <tr>
                                   
                                    <th> Name</th>
                                    <th> Toxicity</th>
                                    <th> Type </th>
                                    <th> Details </th>
                                    {this.getActions()} 
                                </tr>
                </thead>

                <tbody>
                                {
                                    this.state.FMInsecticide.map(
                                        FMInsecticide =>  
                                        <tr key = {FMInsecticide.id}>
                                              
                                             <td> {FMInsecticide.inName}</td>
                                             <td> {FMInsecticide.inToxicity}</td>
                                             <td> {FMInsecticide.inType}</td>
                                             <td> {FMInsecticide.inDetails}</td>
                                             {this.getUD(FMInsecticide.id)} 
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

export default ListInsecticideComponent;

