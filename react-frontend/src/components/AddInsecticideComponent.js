import React, { Component } from 'react';
import FMService from '../services/FMService';

class AddInsecticideComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            
            inName: '',
            inToxicity: '',
            inType: '',
            inDetails: ''
        }
        this.saveOrUpdateIns = this.saveOrUpdateIns.bind(this);
       
        this.changeInNameHandler = this.changeInNameHandler.bind(this);
        this.changeInToxicityHandler = this.changeInToxicityHandler.bind(this);
        this.changeInTypeHandler = this.changeInTypeHandler.bind(this);
        this.changeInDetailsHandler = this.changeInDetailsHandler.bind(this);
       
    }

    saveOrUpdateIns = (e) => {
        e.preventDefault();
        let FMInsecticides = { inName: this.state.inName, 
            inToxicity: this.state.inToxicity,     inType: this.state.inType, inDetails: this.state.inDetails};
        console.log('FMInsecticides => ' + JSON.stringify(FMInsecticides));
        if(this.state.inName.trim()!='' && this.state.inType.trim() != '' && this.state.inToxicity.trim()!='' && this.state.inDetails.trim()!= '')
        {
        if(this.state.id === '_add'){
            console.log ("in add");
            FMService.addInsecticide(FMInsecticides).then(res =>{
                this.props.history.push('/listinsecticides');                
            });             
            
        }   
        else
        {
            console.log("in update");
            FMService.updateInsecticide(FMInsecticides, this.state.id).then(res =>{
                this.props.history.push('/listinsecticides');
            });
        }
    }
    }
    
    componentDidMount(){
        if(this.state.id === '_add')
        {

            return
        }else
        {
            FMService.getInsecticideById(this.state.id).then( (res) =>{
                let fmInsecticide = res.data;
        
                this.setState
                (
                    {
                    inName: fmInsecticide.inName,
                    inToxicity: fmInsecticide.inToxicity,
                    inType: fmInsecticide.inType,
                    inDetails: fmInsecticide.inDetails
                });
            });
                
    }
}
     

    changeInNameHandler= (event) => {
        this.setState({inName: event.target.value});
    }

    changeInToxicityHandler= (event) => {
        this.setState({inToxicity: event.target.value});
    }
    changeInTypeHandler= (event) => {
        this.setState({inType: event.target.value});
    }
    changeInDetailsHandler= (event) => {
        this.setState({inDetails: event.target.value});
    }
    cancel(){
        this.props.history.push('/listinsecticides');
    }


    getTitle()
    {
        if(this.state.id === '_add')
        {
            return <h3 className="text-center">Add Insecticide</h3>
        }else
        {
            return <h3 className="text-center">Update Insecticide</h3>
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
                                    <h2 className="text-right" style={{color:'red', fontSize:'15px'}}>  All fields are compulsory for Save operation.</h2>
                                            
                                        <div className = "form-group">
                                        <label>  Name: </label>
                                            <input placeholder="Insecticide Name" name="inName" className="form-control" 
                                                value={this.state.inName} onChange={this.changeInNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Toxicity: </label>
                                            <input placeholder="Toxicity" name="inToxicity" className="form-control" 
                                                value={this.state.inToxicity} onChange={this.changeInToxicityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="Type" name="inType" className="form-control" 
                                                value={this.state.inType} onChange={this.changeInTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Details: </label>
                                            <input placeholder="Insecticide Details" name="inDetails" className="form-control" 
                                                value={this.state.inDetails} onChange={this.changeInDetailsHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateIns}>Save</button>
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

export default AddInsecticideComponent;