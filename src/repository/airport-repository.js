const {Airport} = require('../models/index')

class AirportRepository{
    async createAirport({name, cityId}){
        try {
            const airport = await Airport.create({
                name:name,
                cityId:cityId
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            console.log({error});
        }
    }
    async updateAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name=data.name;
            airport.address=data.address;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            console.log({error});
        }
    }
    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            console.log({error});
        }
    }
    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where:{
                    id:airportId
                }
            })
            return true;
            
        } catch (error) {
            console.log("Something went wrong at repository layer");
            console.log({error});
        }
    }

}

module.exports = AirportRepository;