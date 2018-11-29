

class WinkitController{
    constructor(){
        this.model = {};
    }

    async list() {
        console.log(this.request)
        return [{"my" : "god"}];
    }

    async retrieve(id){
        return {"my":"god", "id": id};
    }

    async post(params){
        let instance = await this.model.create(params);
        return instance;
    }
}

module.exports = WinkitController;