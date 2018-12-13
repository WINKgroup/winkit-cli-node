const _ = require('lodash');

class ModelSerializer {

    constructor(model, instance, many=false){
        this.fields = model.output_fields;
        this._many = many;
        this._instance = instance;

        if ( this.fields === '__all__'){
            let keys = [];
            for (const key of Object.keys(model.attrs)){
                keys.push(key);
            }
            this.fields = keys;
        }
        else if ( ! Array.isArray(this.fields)){
            throw new Error(' fields is not array');
        }
    }

    data(){
        if ( typeof this._instance === "undefined" ){
            throw new Error("Call save or set instance before serializing ... ")
        }

        return new Promise( (resolve => {
            if ( this._many ){
                let output = [];
                this._instance.forEach( (v) =>{
                    output.push(_.pick(v, this.fields));
                });
                return resolve(output);
            }
            return resolve(_.pick(this._instance, this.fields));
        }));
    }
}


module.exports = ModelSerializer;