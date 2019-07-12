import express from 'express';

const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req,res)=>{
res.send('hi')
})


// where page not found
app.use((req, res, next) => {
    const error = new Error('method used is not allowed');
    error.status = 405;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500).send({ error: error.status || 500, message: error.message });
    next();
  });


app.listen(port, () => console.log(`listening on port ${port}...!`));