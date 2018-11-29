

class WinkitController{
    constructor(){
        this.model = {};
    }

    async list() {
        return [{"my" : "god"}];
    }

    async retrieve(id){
        console.log(this.model)
        return {"my":"god", "id": id};
    }
}

module.exports = WinkitController;