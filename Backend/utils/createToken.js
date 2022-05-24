import jwt from "jsonwebtoken";
import dotnet from "dotenv";

dotnet.config();
const sign = jwt.sign;
const privatekey = process.env.privatekey;

const createToken = (user, tokenStatus = "confirm") => {
    if (tokenStatus === "confirm") {
      const token = sign({ id: user._id }, privatekey, { expiresIn: "24h" });
      user.accessToken = token;
      return token;
    } else if (tokenStatus === "temp") {
      const token = sign({ id: user._id }, privatekey, { expiresIn: "10m" });
      user.tempToken = token;
      return token;
    }
  };

export default createToken;