import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const MONGODB_URL =
	'mongodb+srv://caeserlondon:caeserlondon@cluster0.x2del.mongodb.net/tour_db?retryWrites=true&w=majority';

const port = 5050;

mongoose
	.connect(MONGODB_URL)
	.then(() => {
		app.listen(port, () => console.log(`Server running on port ${port}`));
	})
	.catch((error) => console.log(`${error} Did Not connect`));
