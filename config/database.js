import mongoose from "mongoose";
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected succesfully")
    } catch (error) {
        console.log("connection failed",error)

    }
}
export default dbConnect;