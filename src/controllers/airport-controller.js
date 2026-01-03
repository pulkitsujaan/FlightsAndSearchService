const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.create(req.body);
        return res.status(200).json({
            data:airport,
            result:"success",
            message:"Succesfully created an airport"
        })
    } catch (error) {
        return res.status(500).json({
            result:"failure",
            message:"Unable to create an airport",
            err:error
        })
    }
}
const update = async (req,res)=>{
    try {
        const airport = await airportService.update(req.params.id, req.body);
        return res.status(200).json({
            data:airport,
            result:"sucess",
            message:"Succesfully updated the airport"
        })
    } catch (error) {
        return res.status(500).json({
            result:"failure",
            message:"Unable to update the airport",
            err:error
        })        
    }
}
const get = async (req,res)=>{
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data:airport,
            result:"sucess",
            message:"Succesfully fetched the airport"
        })
    } catch (error) {
        return res.status(500).json({
            result:"failure",
            message:"Unable to fetch the airport",
            err:error
        })        
    }
}
const destroy = async (req,res)=>{
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            value:response,
            result:"sucess",
            message:"Succesfully deleted the airport"
        })
    } catch (error) {
        return res.status(500).json({
            result:"failure",
            message:"Unable to delete the airport",
            err:error
        })        
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
}