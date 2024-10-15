import React, { Component } from 'react';
import FMService from '../services/FMService'
import UserContext from './UserContext';


class ListCropsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FMCrop: [],
            searchValue: ''
          
        }
        this.lUser = '';
        this.addCrop = this.addCrop.bind(this);
        this.deleteCrop = this.deleteCrop.bind(this);
        this.editCrop = this.editCrop.bind(this);
        this.listEquipments=this.listEquipments.bind(this);
        this.listInsecticides=this.listInsecticides.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
        this.searchHandler= this.searchHandler.bind(this);
        this.updateSearchValue = this.updateSearchValue.bind(this);
    }

    listEquipments ()
    {   
       this.props.history.push('/listequipments');
    }

    listInsecticides ()
    {
        this.props.history.push('/listinsecticides'); 
    }

    addCrop ()
    {
         this.props.history.push('/addcrop/_add'); 
      
     
    }
    editCrop(id){
        this.props.history.push(`/addcrop/${id}`);
    }
    deleteCrop(id){
        FMService.deleteCrop(id).then( res => {
            this.setState({FMCrop: this.state.FMCrop.filter(fmcrop => fmcrop.id !== id)});
        });
    }

    updateSearchValue(e){
        if(e.target.value == ''){
            FMService.getCrops().then((res) => {
                this.setState({FMCrop: res.data});
                console.log (res.data)
                console.log("in listcrop" + res.data)
            });
        }
        this.setState({searchValue : e.target.value});
    }

  
    static contextType = UserContext;
  
    componentDidMount()
    {
        
        FMService.getCrops().then((res) => {
            this.setState({FMCrop: res.data});
            console.log (res.data)
            console.log("in listcrop" + res.data)
        });

        console.log(this.context)

       

    }
    getAdd()
    {
        console.log('in getAdd')
        if (this.lUser === 'admin')
            return <button style = {{marginLeft: "410px"}} className="btn btn-primary" onClick={ this.addCrop}> Add Crop </button>
        
    }   
    getActions()
    {
        console.log('in getActions')
        if (this.lUser === 'admin')
            return <th> Actions </th>
    }
    getUD(cropID)
    {
        if (this.lUser === 'admin')
            return(
            <td>
                <button onClick={ () => this.editCrop(cropID)} className="btn btn-info">Update </button>
                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCrop(cropID)} className="btn btn-danger">Delete </button>
            </td>
        
            )
    }
    getUser(fmUser)
    {
        this.lUser = fmUser;

        console.log('in get user ' + fmUser);
    }
    
    logOutHandler ()
    {
        this.props.history.push('/');      
    }

    searchHandler(){
        
        FMService.getCropsBySoil(this.state.searchValue).then( res => {
            this.setState({FMCrop: res.data});
        });
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
                <h2 className="text-center">Crop List</h2>
                
                <div className = "row">
                    <button className="btn btn-primary" onClick={ () => this.listEquipments()}> Equipments </button>
                    <button style={{marginLeft: "20px"}} className="btn btn-primary" onClick={ () => this.listInsecticides()}> Insecticides </button>
                    
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{marginLeft: "20px", width : "20%"}} value = {this.state.searchValue} onChange={this.updateSearchValue}/>
  <button type="button" class="btn btn-outline-primary" onClick = {this.searchHandler}>search</button>

  
                    {this.getAdd()}
                   
                    
    

                    
                    <button className="btn btn-danger" style={{marginLeft: "40px"}} onClick={this.logOutHandler}> Log out </button>
                    <br></br>
                 </div>
               <div className = "row"> 
               
               <table className = "table table-striped table-bordered">
                <thead>
                                <tr>
                                     
                                    <th> Crop Name</th>
                                    <th> Season</th>
                                    <th> Crop Type </th>
                                    <th> Soil Type </th>
                                    <th> State </th>
                                    {this.getActions()}
                                    
                                    
                                </tr>
                </thead>

                <tbody>
                                {
                                    this.state.FMCrop.map(
                                        FMCrop =>  
                                        <tr key = {FMCrop.id}>
                                                
                                             <td> {FMCrop.cropName}</td>
                                             <td> {FMCrop.season}</td>
                                             <td> {FMCrop.cropType}</td>
                                             <td> {FMCrop.soilType}</td>
                                             <td> {FMCrop.state}</td>
                                             {this.getUD(FMCrop.id)}
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

export default ListCropsComponent;


