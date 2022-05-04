import {mentee,mentor} from "./Data.js";

export const Data_Mentee = async ()=>{
    return mentee.find({},function(err,users){
        if(err) console.warn(err);
        console.warn(users);
    });
}
export const Data_Mentor = async ()=>{
    return mentor.find({},function(err,users){
        if(err) console.warn(err);
        console.warn(users)
    });
}

