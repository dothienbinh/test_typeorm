const express = require('express');
import { createQueryBuilder } from "typeorm";
import { User } from "../entity/User";

const router = express.Router();

router.get("/api/getUser", async (req, res) => {
    const user = await createQueryBuilder("user")
        .select("user.firstName")
        .addSelect("userdepartments")
        .from(User, "user")
        .where("user.id = :userId": {
            userId: 1,
        })
        .getOne();
        // .getMany();

        return res.json({
            user
        });
})

export {router as FetchUserRouter}