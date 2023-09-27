import { Express, Request, Response } from "express";
import ItemsController from "../controllers/ItemsController";

export function registerRoutes(app: Express) {
    app.get("/", (req: Request, res: Response) => {
        res.render('home');
    });

    app.get("/items", ItemsController.index);
    app.get("/items/:id/show", ItemsController.show);
    app.get("/items/create", ItemsController.create);
    app.post("/items/store", ItemsController.store);
    app.post("/items/update", ItemsController.update);
    app.post("/delete", ItemsController.delete);    
}
