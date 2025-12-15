import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//middleware
app.use(cors({
  origin: "http://localhost:5174"
})
);
app.use(express.json()); // parse json bodies 
app.use(rateLimter);


app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log('Server is running on port :', PORT);
  });
});





