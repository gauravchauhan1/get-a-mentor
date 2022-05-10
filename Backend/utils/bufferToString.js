import Datauri from "datauri/parser.js";
import path from "path";

const dataURIChild = new Datauri();

const bufferToString = (originalname, buffer) => {
  const extname = path.extname(originalname);
  return dataURIChild.format(extname, buffer).content;
};

export default bufferToString;
