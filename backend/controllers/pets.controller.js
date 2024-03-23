import Pets from "../models/pets.model.js";

//CREATE
const createPet = async (req, res) => {
  try {
    let data = req.body;
    let newData = await Pets.create(data);
    res.status(200).json(newData);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: "Please fill the form correctly",
    });
  }
};

// GET ALL
const getAllPets = async (req, res) => {
  try {
    let list = await Pets.find().sort({ petType: 1 }).exec();
    res.status(200).json(list);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET BY ID
const getPetsById = async (req, res) => {
  try {
    let id = req.params.petsId;
    let found = await Pets.findById(id);
    res.status(200).json(found);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

//UPDATE NORMAL
const updatePet = async (req, res) => {
  try {
    let id = req.params.petsId;
    let data = req.body;
    await Pets.findByIdAndUpdate(id, data, { runValidators: true });
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error);
    res.status(400).json({
      message: error.message,
    });
  }
};

//BORRAR
const deletePet = async (req, res) => {
  try {
    let id = req.params.petsId;
    await Pets.findByIdAndDelete(id);
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

export { createPet, getAllPets, getPetsById, updatePet, deletePet };
