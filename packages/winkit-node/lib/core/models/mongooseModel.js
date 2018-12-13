const  _ = require('lodash');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

class MongooseModel {

    constructor(name, schema){
        this.schema = schema;

        this.attrs = {};

        let monSchema = {};

        Object.keys(this.schema.attributes).forEach( attr => {

            this.attrs[attr] = this.schema.attributes[attr];
            monSchema[attr] = String;
        });

        this.modelSchema = new Schema(monSchema);
        this.model = mongoose.model(name, this.modelSchema);
        this.output_fields = this.schema.output_fields;
    }

    get attributes(){
        return this.attrs;
    }

    create( params ){
        let instance = new this.model(params);
        return new Promise( (async (resolve, reject) => {
            instance.save().then( value => {
                resolve(value)
            }).catch( err =>{
                reject(err)
            })
        }));
    }

    find(){
        return new Promise( ((resolve, reject) => {
            this.model.find()
                .then( data => {resolve(data)})
                .catch( err => reject(err))
        }))
    }
}

module.exports = MongooseModel;
