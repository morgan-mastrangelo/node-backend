import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

import api from './routes';

dotenv.config();

const app = express();
const uri = 'mongodb+srv://bluecomet2004:Bluecomet20040117@cluster0.scllotv.mongodb.net/portfolio';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.use('/api', api);

app.get('/', (req: express.Request, res: express.Response) => res.send("Portfolio Backend."));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));