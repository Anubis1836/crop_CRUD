import React, { Component } from 'react';
import FMService from '../services/FMService';


class AddEquipmentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
          
            eqName: '',
            eqPrice: '',
            eqDetails: ''
        }
        this.saveOrUpdateEQs = this.saveOrUpdateEqs.bind(this);
        this.changeEqNameHandler = this.changeEqNameHandler.bind(this);
        this.changeEqPriceTypeHandler = this.changeEqPriceHandler.bind(this);
        this.changeEqDetailsHandler = this.changeEqDetailsHandler.bind(this);
       
    }

    saveOrUpdateEqs = (e) => {
        e.preventDefault();
        let FMEquipments = {eqName: this.state.eqName, eqPrice: this.state.eqPrice, eqDetails: this.state.eqDetails};
        console.log('FMEquipments => ' + JSON.stringify(FMEquipments));
        
        if(this.state.id === '_add'){
            console.log ("in add");
            FMService.addEquipment(FMEquipments).then(res =>{             
            this.props.history.push('/listequipments');
            });
        }
        else
        {
            console.log("in update");
            FMService.updateEquipment(FMEquipments, this.state.id).then(res =>{
                this.props.history.push('/listequipments');
            });    
        }
    }
  

    componentDidMount(){
        if(this.state.id === '_add')
        {

            return
        }else
        {
            FMService.getEquipmentById(this.state.id).then( (res) =>{
                let fmEquipment = res.data;
        
                this.setState
                (
                    {
                    eqName: fmEquipment.eqName,
                    eqPrice: fmEquipment.eqPrice,
                    eqDetails: fmEquipment.eqDetails
                });
            });
                
    }
}
   

    changeEqNameHandler= (event) => {
        this.setState({eqName: event.target.value});
    }

    changeEqPriceHandler= (event) => {
        this.setState({eqPrice: event.target.value});
    }
    changeEqDetailsHandler= (event) => {
        this.setState({eqDetails: event.target.value});
    }
    cancel(){
        this.props.history.push('/listequipments');
    }


    getTitle()
    {
        if(this.state.id === '_add')
        {
            return <h3 className="text-center">Add Equipment</h3>
        }else
        {
            return <h3 className="text-center">Update Equipment</h3>
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
                                            <label> Name: </label>
                                            <input placeholder="Equipment Name" name="eqName" className="form-control" 
                                                value={this.state.eqName} onChange={this.changeEqNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Equipment Pice" name="eqType" className="form-control" 
                                                value={this.state.eqPrice} onChange={this.changeEqPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Details: </label>
                                            <input placeholder="Equipment Details" name="seqDetails" className="form-control" 
                                                value={this.state.eqDetails} onChange={this.changeEqDetailsHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEqs}>Save</button>
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

export default AddEquipmentComponent;