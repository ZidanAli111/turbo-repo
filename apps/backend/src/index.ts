import express from 'express';
import { BACKEND_URL } from '@repo/common/config';

const app = express();

console.log(BACKEND_URL);

app.get("/", (req, res) => {
    res.json({
        message: "Hi, I'm Zidan"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})