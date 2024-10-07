import { model, models, Schema } from "mongoose";

export interface Transactions extends Document{
    createdAt : Date;
    stipeId : string;
    amount : number;
    plan : string;
    credits : string;
    buyer : {
        _id: string;
        firstName: string;
        lastName: string;
    }
}

const TransactionSchema = new Schema ({
    createdAt : { type : Date, default : Date.now},
    stripeId : { type : String, required : true, unique : true},
    amount : { type : Number, required : true},
    plan : { type : String},
    credits : { type : String},
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
});

const Transactions = models?.Transaction || model("Transaction", TransactionSchema)

export default Transactions;