import dotenv from "dotenv";
dotenv.config({
    path : "./.env"
});
import app from "./app/app.js";
import use from "./app/app.use.js";


use(app);

app.listen(process.env.PORT,()=>console.log("App listening ",process.env.PORT));


