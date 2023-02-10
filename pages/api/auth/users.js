import connectMongo from "../../../Database/connections";
import Users from "../../../Models/Schemas";

/**
 * desc Get all Users
 * @param {*} req
 * @param {*} res
 */
export default async function handler(req, res) {
  connectMongo();
  if (req.method === "GET") {
    try {
      let allusers = await Users.find();
      res.status(200).json(allusers);
    } catch (err) {
      console.log(err);
    }
  } else {
    res
      .status(500)
      .json({message: "HTTP method is not valid only GET Accepted"});
  }
}
