

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({origin :'*'}))
app.use(express.json())

app.get("/health",(req,res)=>(
	res.status(200).json({
	  success:true,
	 message : "server responded succesfully",
		health : "100%"
	})))

app.get("/api/message", (req, res) => {
	console.log("message route called");
  res.json({ message: "Hello from Express backend 🚀" });
});

app.listen(5000,'0.0.0.0',()=>(
	console.log("Server started successfully and listening to port 5000")))
