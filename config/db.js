const mongoose =require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://restaurant-server:bTvycGqHePBHuZcP@cluster0.xo2wk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connection successful')
    } catch (error) {
        
    }
}

module.exports = connectDB