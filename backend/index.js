const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./config').port;


const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/utils');
const cartRouter = require('./routers/cartManager');


app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/cart', cartRouter);

app.use(express.static('./uploads'));

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})


app.listen(port, () => {
    console.log('server started at port 5000')
})