import { Data_Mentee, Data_Mentor } from "../Models/data.model.js";


export const Mentor_data = async (req, res) => {
  try {
    const allMentor = await Data_Mentor();
    res.status(200).json(allMentor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const Mentee_data = async (req, res) => {
  try {
    const allMentee = await Data_Mentee();
    res.status(200).json(allMentee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

