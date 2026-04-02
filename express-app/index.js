const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Express in Docker!',
    timestamp: new Date().toISOString()
  });
});
app.get("/health",(req,res)=>{
  res.status(200).json({
     health : "100%",
     message : "server responded successfully"
  })
})


app.listen(port,"0.0.0.0", () => {
  console.log(`Server running at port  : ${port}`);
});
