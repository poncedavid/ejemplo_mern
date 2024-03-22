import express from "express";
import * as petsCtrl from "../controllers/pets.controller.js";

const petRouter = express.Router();

petRouter.post("/api/pets/new", petsCtrl.createPet);
petRouter.get("/api/pets/get", petsCtrl.getAllPets);
petRouter.get("/api/pets/get/:petsId", petsCtrl.getPetsById);
petRouter.put("/api/pets/update/:petsId", petsCtrl.updatePet);
petRouter.delete("/api/pets/delete/:petsId", petsCtrl.deletePet);

export { petRouter };
