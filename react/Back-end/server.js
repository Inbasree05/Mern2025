const express = require('express');
const dotenv=require('dotenv');
const cors=require('cors')
dotenv.config();

const app = express();
//const PORT = 5000;
const PORT = process.env.PORT;
const connectDB=require('./config/db');
const router = require('./routers/egRouters');
const todoRoute=require('./routers/todoRouters');
connectDB();
app.use(express.json())
app.use(router)
app.use(cors());
app.use('/todo', todoRoute);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
