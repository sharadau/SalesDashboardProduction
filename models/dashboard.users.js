/**
 * Created by sharadau on 23-06-2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    _id:{
        type:Number,
        required:true
    },
    emailId:{
        type:String,
        required:false
    },
    user_type:{
        type:Number, //1-Sales, 2-participants, 3-others, 4-outsiders, 5-admin, 6-CTO_CEO
        required:false
    },
    area:{
        type:String,
        required:false
    }
});
mongoose.model('Users',usersSchema);