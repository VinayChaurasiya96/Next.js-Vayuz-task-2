import { Schema,model,models } from "mongoose";

const userSChema = new Schema ({
    username : String,
    email:String,
    password:String

})

const Users = models.user || model('user', userSChema)
export default Users;