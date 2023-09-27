import path from 'path';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { registerRoutes } from './routes/index';

dotenv.config();

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname.replace('/dist', ''), 'views'));

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

registerRoutes(app);
