'use strict';

import mongoose from 'mongoose';

const pizzaSchema = mongoose.Schema({
  type: {type:String, required:true},
  toppings:{type:String, required:true},
  editing: {type:Boolean, default: false},
});

export default mongoose.model('Pizza', pizzaSchema);