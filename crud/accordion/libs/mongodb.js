const { default: mongoose } = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect mongoDB ok");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
