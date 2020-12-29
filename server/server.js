const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const userRouter = require('./routes/user');
const authRouter =  require('./routes/auth');
const app = express()
const PORT = process.env.PORT || 5000;

// Passing middleware
app.use(express.json())

const db = config.get('mongoURI');

mongoose.connect(db, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true
    })
    .then(() => console.log('MongoDB is connected...'))
    .catch(err => console.log('Database connection error : '+err))

// Routes
app.use('/api/users',userRouter )
app.use('/api/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
})