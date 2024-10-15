import axios from 'axios';
const FMS_API_CROP_URL = "http://localhost:8080/api/v1";
const FMS_API_EQ_URL = "http://localhost:8080/api/v2";
const FMS_API_IN_URL = "http://localhost:8080/api/v3"; 

class FMService {

    getCrops(){
        console.log("In get crop service");
        return axios.get(FMS_API_CROP_URL + '/listcrops') ;
    }
    getEquipments(){
        return axios.get(FMS_API_EQ_URL + "/listequipments") ;
    }
    getInsecticides(){
        return axios.get(FMS_API_IN_URL + "/listinsecticides") ;
    }
    getCropsBySoil(key){
        return axios.get(FMS_API_CROP_URL + "/listcrops/search/" + key);
    }
    
     
    addEquipment(fmEquipment){
        return axios.post(FMS_API_EQ_URL + '/saveeq', fmEquipment);
    }
    updateEquipment(fmEquipment, eqId){
        return axios.put(FMS_API_EQ_URL + '/listequipments/' + eqId, fmEquipment);
    }
    
    getEquipmentById(eqId){
        return axios.get(FMS_API_EQ_URL + '/listequipments/' + eqId);
    }

    deleteEquipment(eqId){
        return axios.delete(FMS_API_EQ_URL + '/listequipments/' + eqId);
    }
    
     
    addInsecticide(fmInsecticide){
        console.log ("IN fmService add AddInsecticideComponent");
        return axios.post(FMS_API_IN_URL + '/savein', fmInsecticide);
    }
    updateInsecticide(fmInsecticide, inId){
        return axios.put(FMS_API_IN_URL + '/listinsecticides/' + inId, fmInsecticide);
    }
    getInsecticideById(inId){
        return axios.get(FMS_API_IN_URL + '/listinsecticides/' + inId);
    }
    deleteInsecticide(inId){
        return axios.delete(FMS_API_IN_URL + '/listinsecticides/' + inId);
    }
    
    
    addCrop(fmCrops){
        return axios.post(FMS_API_CROP_URL + '/savecrop', fmCrops);
    }
    updateCrop(fmCrops, cropId){
        return axios.put(FMS_API_CROP_URL + '/listcrops/' + cropId, fmCrops);
    }
    
    getCropById(cropId){
        return axios.get(FMS_API_CROP_URL + '/listcrops/' + cropId);
    }

    deleteCrop(cropId){
        return axios.delete(FMS_API_CROP_URL + '/listcrops/' + cropId);
    }
}
export default new FMService()

