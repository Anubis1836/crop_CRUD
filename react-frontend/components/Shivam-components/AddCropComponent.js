import React, { Component } from 'react';
import FMService from '../services/FMService';
import Error from './Error';

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
            details: '',
            error : {
                name : false,
                type : false,
                season: false,
                soil: false,
                state: false,
                details:false
            }     
        }
        this.saveOrUpdateCrops = this.saveOrUpdateCrops.bind(this);
        this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
        this.changeCropTypeHandler = this.changeCropTypeHandler.bind(this);
        this.changeSeasonHandler = this.changeSeasonHandler.bind(this);
        this.changeSoilTypeHandler = this.changeSoilTypeHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeDetailsHandler = this.changeDetailsHandler.bind(this);
        this.getErrors = this.getErrors.bind(this);
    }

    saveOrUpdateCrops = (e) => {
        e.preventDefault();
        console.log(this.state.cropType)
        const err = {
            name : this.state.cropName == '' ? true : false,
            type : this.state.cropType == '' ? true : false,
            season: this.state.season == '' ? true : false,
            soil: this.state.soilType == '' ? true : false,
            state: this.state.state == '' ? true : false,
            details:this.state.details == '' ? true : false

        }
        console.log(this.state.error)
        this.setState(
            
            {
            error : err
        }    
        
        )

        console.log(this.state.error)

        
        if (this.state.cropName != '')
        {
        let FMCrops = {cropName: this.state.cropName, cropType: this.state.cropType, season: this.state.season, soilType: this.state.soilType, state: this.state.state, details:this.state.details};
        console.log('FMCrops => ' + JSON.stringify(FMCrops));
        
        if(!this.getErrors()){
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
    }

    getErrors = ()=>{
        for(const key in this.state.error){
            if(this.state.error[key])
                return true;
        }
        return false;
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
        const err = {
            ...this.state.error,
            name: event.target.value == '' ? true : false
        }
        this.setState({cropName: event.target.value,
        error : err});
        console.log ("In changeCropNameHandler");
        console.log(this.cropName);
    }

    changeCropTypeHandler= (event) => {
        const err = {
            ...this.state.error,
            type: event.target.value == '' ? true : false
        }
        this.setState({cropType: event.target.value,
        error : err});
    }
    changeSeasonHandler= (event) => {
        const err = {
            ...this.state.error,
            season: event.target.value == '' ? true : false
        }
        this.setState({season: event.target.value,
        error : err});
    }
    changeSoilTypeHandler= (event) => {
        const err = {
            ...this.state.error,
            soil: event.target.value == '' ? true : false
        }
        this.setState({soilType: event.target.value,
        error : err});
    }
    changeStateHandler= (event) => {
        const err = {
            ...this.state.error,
            state: event.target.value == '' ? true : false
        }
        this.setState({state: event.target.value,
        error : err});
    }
    changeDetailsHandler= (event) => {
        const err = {
            ...this.state.error,
            details: event.target.value == '' ? true : false
        }
        this.setState({details: event.target.value,
        error : err});
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
                                            <label> Crop Name: </label>
                                            <input placeholder="Crop Name" name="cropName" className="form-control" 
                                                value={this.state.cropName} onChange={this.changeCropNameHandler} style = {{ border: this.state.error.name ? "red 1px solid" : ""}}/>
                                            {this.state.error.name && <Error name = "Crop Name"/>}
                                        </div>
                                        <div className = "form-group">
                                            <label> CropType: </label>
                                            <input placeholder="cropType" name="cropType" className="form-control" 
                                                value={this.state.cropType} onChange={this.changeCropTypeHandler} style = {{ border: this.state.error.type ? "red 1px solid" : ""}}/>
                                            {this.state.error.type && <Error name = "Crop Type"/>}
                                        </div>
                                        <div className = "form-group">
                                            <label> Season: </label>
                                            <input placeholder="season" name="season" className="form-control" 
                                                value={this.state.season} onChange={this.changeSeasonHandler} style = {{ border: this.state.error.season ? "red 1px solid" : ""}}/>
                                            {this.state.error.season && <Error name = "Season"/>}
                                        </div>
                                        <div className = "form-group">
                                            <label> SoilType: </label>
                                            <input placeholder="soilType" name="soilType" className="form-control" 
                                                value={this.state.soilType} onChange={this.changeSoilTypeHandler} style = {{ border: this.state.error.soil ? "red 1px solid" : ""}}/>
                                            {this.state.error.soil && <Error name = "Soil Type"/>}
                                        </div>
                                        <div className = "form-group">
                                            <label> State: </label>
                                            <input placeholder="state" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler} style = {{ border: this.state.error.state ? "red 1px solid" : ""}}/>
                                            {this.state.error.state && <Error name = "State"/>}
                                        </div>
                                        <div className = "form-group">
                                            <label> Details: </label>
                                            <input placeholder="details" name="details" className="form-control" 
                                            border-color = "red"
                                                value={this.state.details} onChange={this.changeDetailsHandler} style = {{ border: this.state.error.details ? "red 1px solid" : ""}}/>
                                            {this.state.error.details && <Error name = "Crop Details"/>}
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
