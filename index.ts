import express from 'express';
import { calculator } from './calculator';
type Operation = 'multiply' | 'add' | 'divide';
interface CalculationParams {
    value1: number,
    value2: number,
    op: Operation
}

const app = express();

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.post('/calculate', (req, res) => {

    const { value1, value2, op } = req.body as CalculationParams;
    const result = calculator(value1, value2, op);
    res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

