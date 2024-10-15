import React, { Component } from 'react';
import FMService from '../services/FMService';

class AddCropComponent extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            // step 2
            id: this.props.match.params.id,
            cropName: '',
            cropType: '',
            season: '',
            soilType:'',
            state: '' ,   
            details: ''        
        }
        this.saveOrUpdateCrops = this.saveOrUpdateCrops.bind(this);
        this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
        this.changeCropTypeHandler = this.changeCropTypeHandler.bind(this);
        this.changeSeasonHandler = this.changeSeasonHandler.bind(this);
        this.changeSoilTypeHandler = this.changeSoilTypeHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeDetailsHandler = this.changeDetailsHandler.bind(this);
    }

    saveOrUpdateCrops = (e) => {
        e.preventDefault();
        
        let FMCrops = {cropName: this.state.cropName, cropType: this.state.cropType, season: this.state.season, soilType: this.state.soilType, state: this.state.state, details:this.state.details};
        console.log('FMCrops => ' + JSON.stringify(FMCrops));
        

        if(this.state.cropName.trim() != '' && this.state.cropType.trim() && this.state.season.trim() && this.state.soilType.trim()&& this.state.state.trim()&& this.state.details.trim())
        {
            if(this.state.id === '_add'){
                console.log ("in add");
                 
                FMService.addCrop(FMCrops).then(res =>{
                    this.props.history.push('/listcrops');
                    
                });
    
            }
            else
            {
                console.log("in update");
                console.log('FMCrops => ' + JSON.stringify(FMCrops));
                FMService.updateCrop(FMCrops, this.state.id).then
                    (res =>{this.props.history.push('/listcrops');});
                    
            }
        }
    }
   
    
    componentDidMount(){
        if(this.state.id === '_add')
        {

            return
        }else
        {
            FMService.getCropById(this.state.id).then( (res) =>{
                let fmcrop = res.data;
                console.log(fmcrop);
                this.setState
                (
                    {
                    cropName: fmcrop.cropName,
                    cropType: fmcrop.cropType,
                    season: fmcrop.season,
                    soilType: fmcrop.soilType,
                    state: fmcrop.state,
                    details:fmcrop.details
                });
            });
                
        }
    }

    changeCropNameHandler= (event) => {
        this.setState({cropName: event.target.value});
        console.log ("In changeCropNameHandler");
        console.log(this.state.cropName);
    }

    changeCropTypeHandler= (event) => {
        this.setState({cropType: event.target.value});
    }
    changeSeasonHandler= (event) => {
        this.setState({season: event.target.value});
    }
    changeSoilTypeHandler= (event) => {
        this.setState({soilType: event.target.value});
    }
    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }
    changeDetailsHandler= (event) => {
        this.setState({details: event.target.value});
    }

    cancel(){
        this.props.history.push('/listcrops');
    }
    getTitle()
    {
        if(this.state.id === '_add')
        {
            return <h3 className="text-center">Add Crop</h3>
        }else
        {
            return <h3 className="text-center">Update Crop</h3>
        }
     
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                    
                                }
                                <div className = "card-body">
                                    <form>
                                                                            
                                        <div className = "form-group">
                                        <h2 className="text-right" style={{color:'red', fontSize:'15px'}}>  All fields are compulsory for Save operation.</h2>
                                            <label> Crop Name: </label>
                                            
                                            <tr>
                                            <input placeholder="Crop Name" name="cropName" className="form-control" 
                                                value={this.state.cropName} onChange={this.changeCropNameHandler}/>
                                            </tr>
                                        </div>
                                        <div className = "form-group">
                                            <label> CropType: </label>
                                            <input placeholder="cropType" name="cropType" className="form-control" 
                                                value={this.state.cropType} onChange={this.changeCropTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Season: </label>
                                            <input placeholder="season" name="season" className="form-control" 
                                                value={this.state.season} onChange={this.changeSeasonHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SoilType: </label>
                                            <input placeholder="soilType" name="soilType" className="form-control" 
                                                value={this.state.soilType} onChange={this.changeSoilTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> State: </label>
                                            <input placeholder="state" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Details: </label>
                                            <input placeholder="details" name="details" className="form-control" 
                                                value={this.state.details} onChange={this.changeDetailsHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCrops}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddCropComponent;
