import { model, models, Schema } from "mongoose";

export interface User extends Document{
    username : string;
    firstName : string;
    lastName : string;
    email : string;
    clerkId : string;
    planId : string;
    creditBalance : string;
    photo : string;
}

const UserSchema = new Schema ({
    username : { type : String, required : true, unique : true},
    firstName : { type : String, required : true, unique : true},
    lastName : { type : String, required : true, unique : true},
    email : { type : String, required : true, unique : true},
    clerkId : { type : String, required : true, unique : true},
    planId : { type : Number, required : true, unique : true},
    creditBalnce : { type : Number, required : true, unique : true},
    photo : { type : String, required : true, unique : true},
});

const User = models?.User || model("User", UserSchema)

export default User
