const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    title: String,
    des: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
