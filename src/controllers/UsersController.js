import AppError from "../utills/appError.js"
import sqliteConnection from "../database/sqlite/index.js"
import bcryptjs from "bcryptjs"
const { hash } = bcryptjs

class UsersController {

    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExists) {
            throw new AppError("Esse e-mail já está em uso.")
        }

        const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword])

        return response.status(201).json()
    }

    async update(request, response){
        
    }
}

export default UsersController