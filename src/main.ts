import express from "express";

const app: express.Application = express();
const port: number = 3000;

app.listen(port, (): void => {
 console.log(`Server running on port ${port}`);
});
