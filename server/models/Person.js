import { Schema, model, ObjectId } from "mongoose";

const personSchema = new Schema(
  {
    name: { type: String, required: "{PATH} is required" },
    position: { type: Number, required: "{PATH} is required", unique: true },
    createdBy: { type: ObjectId, ref: "User", default: null },
    modifiedBy: { type: ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Person = model("Person", personSchema);

export default Person;
