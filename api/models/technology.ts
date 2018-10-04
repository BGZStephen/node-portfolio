import { Schema, Model, model } from 'mongoose';
import { TechnologyModel } from '../interfaces';

const TechnologySchema = new Schema({
  label: String,
  image: String,
  createdOn: {type: Date, default: () => new Date()}
});

export const technology: Model<TechnologyModel> = model<TechnologyModel>('Technology', TechnologySchema);
