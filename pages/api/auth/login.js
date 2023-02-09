import connectMongo from "@/Database/connections";
import { compare } from "bcryptjs";
import Users from "../../../Models/Schemas";
import {createToken, refreshToken, refreshTokens} from '../../index';


export default async function handler(req,res){
                connectMongo()
                const {email,password} = req.body;
                // check user existence 
                const result  = await Users.findOne({email})
                if(!result){
                    res.json("No User Found with this Email , please signup ...!");
                }
                
                //encrpt password
                const checkPassword = await compare(password, result.password)
                // check password
                if(!checkPassword || result.email !== email){
                    res.json("username or password doest not match  ")
                }

                const token = createToken(email, password);
                const RefreshToken = refreshToken(email, password);
                refreshTokens.push(RefreshToken);
                
                // get user data using token and send it to response
                
                return res.status(200).json({accesstoken: token, refreshToken: RefreshToken}) ;

   
}