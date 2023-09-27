import { items, PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

class ItemsRepository {
    public async findAll(): Promise<items[]> {
        return await prisma.items.findMany();
    }

    public async findOne(id: number): Promise<items | null> {
        return await prisma.items.findFirst({
            where: {
                id: id,
            }
        });``
    }

    public async Create(title: string, image: string){
        await prisma.items.create({
            data: {
                title,
                image,
            }
        });
    }

    public async Update(id: number, title: string, image: string){
        await prisma.items.update({
            data: {
                title,
                image
            },
            where: {
                id,
            }
        });
    }

    public async Delete(id: number){
        await prisma.items.deleteMany({
            where: {
                id,
            }
        });
    }
}

export default new ItemsRepository();
