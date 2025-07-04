import mongoose,{Document,Schema} from "mongoose";
// import {bcryptjs} from "bcryptjs";
// import bcryptjs;
// import bcryptjs = require('bcryptjs');
import  Logger from "../utils/logger";

export interface IUser extends Document {
    email :string;
    password : string;
    firstName:string;
    lastName:string;
    roles : string[];
    isActive : boolean;
    lastLogin?:Date;
    passwordChanged?:Date;
    tokens:{token:string}[];
    createPassword(candidatePassword:string):Promise<boolean>;
    generateAuthToken():Promise<string>;
    generateRefreshToken:Promise<string>;
}

const userSchema = new Schema<IUser>({
    email:{type:String,required:true,unique:true,trim:true,lowercase:true},
    password:{type:String,required:true,minlength:8},
    firstName:{type:String,required:true,trim:true},
    lastName:{type:String,required:true,trim:true},
    roles:{type:[String],default:['user'],enum:['user','admin','manager']},
    isActive:{type:Boolean,default:true},
    lastLogin:{type:Date},
    passwordChanged:{type:Date},
    tokens:[{token:{type:String,required:true}}]
},{
    timestamps:true
});


userSchema.pre<IUser>('save',async function(next) {
    if(this.isModified('password')){
        try{
                const salt = await bcrypt.genSalt(10);

        } catch(error){

        }
    }
})


