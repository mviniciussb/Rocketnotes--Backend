import appRoutes from "./routes/routerUsers.js"
import express from "express"


const app = express()

app.use("/users", appRoutes)




const port = 3000
app.listen(port, () => console.log(`O servidor foi iniciado na porta ${port}`))