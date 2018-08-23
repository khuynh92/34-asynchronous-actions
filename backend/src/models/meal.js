'use strict';

import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
  meal: {type:String, enum:['breakfast','lunch','dinner','dessert']},
  dish: {type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
});

export default mongoose.model('Meal', mealSchema);