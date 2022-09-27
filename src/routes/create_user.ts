import { User } from "../entity/User";
const express = require('express');
import { AppDataSource } from "../data-source";


const router = express.Router();

router.post("/api/user", async (req, res) => {
    const { code, firstName, lastName, age} = req.body;
    console.log('checkkkkkkkkkkk',req.body);
    const user = new User();
    user.code = 123;
    user.firstName = 'firstName';
    user.lastName = 'lastName';
    user.age = 12;
    console.log(user)

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);
    console.log('lllllllllllllll')
    // await user.save();


    return res.status(200).json({
        mess: "success",
    })
})

export {router as createUserRouter}