import database from '../database/index.js'

const listUsersService = async () => {
    try {
        const res = await database.query("SELECT * FROM users");

        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listUsersService