import { teachers, students} from "./Data.js";

export const Data_Mentee = async()=>{
    return students.find({},function(err,users){
        if(err) console.warn(err);
        console.warn(users);
    });
}
export const Data_Mentor = async()=>{
    return teachers.find({},function(err,users){
        if(err) console.warn(err);
        console.warn(users)
    });
}