


class View {
    constructor(){
        this.output_serializer = null;
        this.input_serializer = null;
        this.controller = null;
        this.model = null;
    }

    async list( request, response){
        let data = await this.controller.list();
        let ser = new this.output_serializer(this.model, data, true);
        response.send( await ser.data());
    }
    async retrieve( request, response){
        response.send( await this.controller.retrieve(request.params.id) );
    }
    async post(request, response) {
        response.send( await  this.controller.post(request.body));
    }
}

module.exports = View;