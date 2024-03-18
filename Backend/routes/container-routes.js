import express from "express";
import { addContainers, deleteById, getAllContainers, updateContainer,getByContainerByDestination } from "../controllers/container-controller";


const blogRouter = express.Router();

blogRouter.get("/",getAllContainers);
blogRouter.post("/add",addContainers);
blogRouter.put("/update/:id",updateContainer);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteById);
blogRouter.get("/:destination",getByContainerByDestination);


export default blogRouter;