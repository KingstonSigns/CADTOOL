import express from 'express';
import uploadsRouter from './routes/uploads.js';
import exportsRouter from './routes/exports.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend scaffold running' });
});

app.use('/api/uploads', uploadsRouter);
app.use('/api/exports', exportsRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
