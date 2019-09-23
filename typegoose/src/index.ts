import mongoose from 'mongoose';
import { seedTheDB } from './models/user';
let DATABASE_URL = 'mongodb://localhost:27017/typegoose';

//connect to db
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected to Db');
}).catch (err => {console.log('message', err.message);
});

seedTheDB();