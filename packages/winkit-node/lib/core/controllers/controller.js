

class WinkitController{
    constructor(){
        this.model = {};
    }

    list() {
        return this.model.find();
    }

    retrieve(id){
        return {"my":"god", "id": id};
    }

    post(params){
        return this.model.create(params);
    }
}

module.exports = WinkitController;