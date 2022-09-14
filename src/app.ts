import express from 'express';
import { connectDB } from './helpers/database/database';
import { router } from './routes/api'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'
import cors from 'cors';
import 'dotenv/config';

const app = express();

connectDB();

app.use(cors())

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.get('/', (request, response) => {
    return response.json({message: 'Hello World!'})
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT} !`))