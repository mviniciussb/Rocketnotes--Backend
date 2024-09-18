import "express-async-errors"
import express, { request, response } from "express"
import routes from "./routes/index.js"
import AppError from "./utills/appError.js"
import migrationsRun from "./database/sqlite/migrations/index.js"


const app = express()
app.use(express.json())

migrationsRun()
app.use(routes)


app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            Status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        Status: "error",
        message: "Internal server error"
    })
})

const port = 3000
app.listen(port, () => console.log(`O servidor foi iniciado na porta ${port}`))

// 