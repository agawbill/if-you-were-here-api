import { Schema, model, ObjectId } from "mongoose";

const messageSchema = new Schema(
  {
    who: { type: ObjectId, ref: "Person", required: "{PATH} is required" },
    identity: { type: ObjectId, ref: "Person", required: "{PATH} is required" },
    message: { type: String, required: "{PATH} is required" },
    flagged: { type: Boolean, default: false },
    approved: { type: Boolean, default: false },
    approvedBy: { type: ObjectId, ref: "User", default: null },
    modifiedBy: { type: ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
