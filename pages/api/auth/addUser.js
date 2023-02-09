import connectMongo from "../../../Database/connections";
import Users from "../../../Models/Schemas";
import {hash} from "bcryptjs";
import {createToken} from "../../index";

export default async function handler(req, res) {
  connectMongo();

  // post method
  if (req.method === "POST") {
    const {username, email, password} = req.body;

    if (!req.body) {
      return res.status(404).json({error: "Dont have form data"});
    }

    // check duplicate user
    const checkExistence = await Users.findOne({email});
    if (checkExistence) {
      return res.status(422).json({message: "User allready Exists ..!"});
    }

    // hash password
    await Users.create(
      {username, email, password: await hash(password, 12)},
      (err, data) => {
        if (err) {
          return res.status(404).json({err});
        } else {
          const token = createToken(email, password);
          // get user data using token and send it to response
          res.status(201).json({status: true, accesstoken: token});
        }
      }
    );
  } else {
    res
      .status(500)
      .json({message: "HTTP method is not valid only POST Accepted"});
  }
}
