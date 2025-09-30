const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("connect ok");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
