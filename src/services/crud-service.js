class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            const result = this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD Service");
            throw {error};
        }
    }

    async destroy(id){
        try {
            const result = this.repository.destroy(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD Service");
            throw {error};
        }
    }

    async get(id){
        try {
            const result = this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD Service");
            throw {error};
        }
    }

    async getAll(filter){
        try {
            const result = this.repository.getAll(filter);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD Service");
            throw {error};
        }
    }

    async update(id, data){
        try {
            const result = this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD Service");
            throw {error};
        }
    }


}

module.exports = CrudService;