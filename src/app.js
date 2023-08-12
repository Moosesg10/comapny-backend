import express from "express";
import empolyeesRoutes from "./routes/empolyees.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import indexRoutes from "./routes/index.routes.js";
import "./config.js";
import cors from "cors";
const app = express();

app.use(cors({
  origin:"http://localhost:8080",
}))

app.use(express.json());

app.use(indexRoutes);
app.use("/api", empolyeesRoutes);
app.use("/api", adminRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
  next();
});

export default app;
