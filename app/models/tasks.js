import { Schema, model, models } from 'mongoose';

const TasksSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


export default models.Task || model('Task', TasksSchema)