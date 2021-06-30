'use strict';


const express =require('express');
 const cors = require('cors');

 const notFoundHandler = require ('./error-handlers/404');
 const errorHandler = require ('./error-handlers/500');

const app = express();

const foodRouter =require('./routes/food');
  const clothesRouter = require('./routes/clothes');

app.use(express.json());

app.use(cors());

app.use('/api/v1/food',foodRouter);
app.use('/api/v1/clothes',clothesRouter);



app.get('/',(req,res)=>{
    res.send('Hello from server')
});


app.get('/bad',(req,res)=>{
    throw new Error('Error');
  })

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    app:app,
    start :(PORT)=>{
        app.listen(PORT,()=>{
            console.log(`listening on ${PORT}`)
        })
    }
}