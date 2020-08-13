import { Schema, model, ObjectId } from "mongoose";

const userSchema = new Schema(
  {
    email: String,
    password: String,
    businessName: String,
    firstName: String,
    lastName: String,
    displayName: String,
    providerId: String,
    provider: String,
    notifications: { type: Boolean, default: true },
    role: String,
    createdBy: { type: ObjectId, ref: "User", default: null },
    modifiedBy: { type: ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
