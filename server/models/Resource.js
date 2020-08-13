import { Schema, model, ObjectId } from "mongoose";

const resourceSchema = new Schema(
  {
    title: { type: String, required: "{PATH} is required" },
    url: { type: String, required: "{PATH} is required" },
    description: { type: String, required: "{PATH} is required" },
    createdBy: { type: ObjectId, ref: "User", default: null },
    modifiedBy: { type: ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Resource = model("Resource", resourceSchema);

export default Resource;
