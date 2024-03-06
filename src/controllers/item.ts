import { Request, Response } from "express";

const getItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEM");
    }
}

const getItems = (req: Request, res: Response) =>{
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEMS");
    }
}

const updateItem = (req: Request, res: Response) =>{
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEM");
    }
}

const postItem = (req: Request, res: Response) =>{
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEM");
    }
}

const deleteItem = (req: Request, res: Response) =>{
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEM");
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem };