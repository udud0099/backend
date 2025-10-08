import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: false },
    id: String,
  },
  {
    timestamps: true,
  }
);

const Firsttry =
  mongoose.models.Firsttry || mongoose.model("Firsttry", userSchema);

export default Firsttry;
