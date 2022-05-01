import { Data_student, Data_teacher } from "../Models/data.model.js";
import stream from 'stream';
import fs from 'fs';


export const Mentor_data = async (req, res) => {
  try {
    const allteacher = await Data_teacher();
    res.status(200).json(allteacher);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const Mentee_data = async (req, res) => {
  try {
    const allstudent = await Data_student();
    res.status(200).json(allstudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

