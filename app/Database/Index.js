import mongoose from "mongoose";

const configOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const connectToDB = async () => {
    const connectionUrl = `mongodb+srv://arpitsarkar16:1234567892023@arpitsarkar.hsttmyw.mongodb.net/`;

    mongoose.connect(connectionUrl, configOption).then(() => console.log("connected")).catch((err) => console.log(err));
}

export default connectToDB