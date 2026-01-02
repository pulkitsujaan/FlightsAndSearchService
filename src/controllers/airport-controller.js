const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);
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
        const airport = await airportService.updateAirport(req.params.id, req.body);
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
        const airport = await airportService.getAirport(req.params.id);
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
        const response = await airportService.deleteAirport(req.params.id);
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