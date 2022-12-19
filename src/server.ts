import express from 'express';

const app = express();

app.use('/health', (req, res) => {
    res.send({ status: 'UP' });
});

export default app;