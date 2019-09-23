"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./models/user");
let DATABASE_URL = 'mongodb://localhost:27017/typegoose';
//connect to db
mongoose_1.default.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to Db');
}).catch(err => {
    console.log('message', err.message);
});
user_1.seedTheDB();
