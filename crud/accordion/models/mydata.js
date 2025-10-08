const { default: mongoose, Schema } = require("mongoose");

const accordionSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 30,
    },
    address: {
      type: String,
      maxlength: 50,
    },
    date: {
      type: Date,
    },
    checkbox: {
      type: Boolean,
    },
    number: {
      type: Number,
    },
    email: {
      type: String,
    },
    dropdown: {
      type: String,
      enum: ["one", "two", "three"], // allowed values only
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"], // allowed values only
    },
  },
  {
    timestamps: true,
  }
);

const Accordion =
  mongoose.models.Accordion || mongoose.model("Accordion", accordionSchema);

export default Accordion;
