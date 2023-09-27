import { Request, Response } from 'express';
import { items, PrismaClient } from '@prisma/client';
import ItemsRepository from '../repositories/ItemsRepository';

const prisma: PrismaClient = new PrismaClient();

class ItemsController {
    async index(req: Request, res: Response) {
        const items: items[] = await ItemsRepository.findAll();

        const itemsQuantity: number = items.length;

        res.render('items/index', {
            'items': items,
            'itemsQuantity': itemsQuantity,
        });
    }

    async show(req: Request, res: Response) {
        const item = await ItemsRepository.findOne(Number(req.params.id));

        res.render('items/show', {
            'item': item
        });
    }

    create(req: Request, res: Response) {
        res.render('items/create');
    }

    async store(req: Request, res: Response) {
        const { title, image } = req.body;

        await ItemsRepository.Create(title, image);

        res.redirect('/');
    }

    async update(req: Request, res: Response){ 
        const { title, image, id} = req.body;

        await ItemsRepository.Update(Number(id), title, image);
        res.redirect('/');
    }

    async delete(req: Request, res: Response){
        const id = Number(req.body.id);

        await ItemsRepository.Delete(id);

        res.redirect('/');
    }
}

export default new ItemsController();
