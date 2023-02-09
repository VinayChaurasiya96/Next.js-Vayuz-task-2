
import connectMongo from "@/Database/connections";
import { compare } from "bcryptjs";
import { Router } from "express";
import Users from "../../../../Models/Schemas";
import {createToken, verifyToken ,refreshToken, refreshTokens} from '../../index';

/**
 * desc Login User Route
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export default async function handler(req,res){ 
            
              try{
                connectMongo()
               
                 
                let userId = req.query.id;
                // const id = await User.findById(userId);
                await Users.deleteOne({_id: userId});
                res.status(200).json(userId);
              }catch(err){
                res.json(err)
                
              }

            

            

   
}