import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Listening for successful connection
        mongoose.connection.on('connected', () => {
            console.log("Database Connected");
        });

        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://oluwasekemiomodara:Oluwasekemi%4018@cluster0.6vwtg.mongodb.net/peernstudy?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        // Error handling
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);  // Exit the application if connection fails
    }
};

export default connectDB;
