import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { DBUser } from '../mongoDB/index.js';

export default async function Auth(req, res, next) {
    let token = req.headers['token']

    if (token) {
        let sercet = await process.env.sercet

        try {
            let detoken = await jwt.verify(token, sercet)
            let user = await DBUser.findOne({ email: detoken.email, username: detoken.username })
            if (user) next()

        } catch (error) {
            res.json(error)
        }
    }
    else res.status(400).send({ msg: "not found token " });
}
export async function LogIn(req, res, next) {
    let { email, password } = req.body
    let user = await DBUser.findOne({ email })
    if (user) {
        bcrypt.compare(password, user.password)
            .then(async compare => {
                if (compare) {
                    let sercet = await process.env.sercet
                    let token = await jwt.sign({ email, username: user.username }, sercet)
                    res.json({ token })
                }
            })
    }
}