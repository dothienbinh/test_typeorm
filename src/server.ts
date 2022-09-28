import { User } from "./entity/User"
import { UserDepartment } from "./entity/UserDepartment"
import { Department } from "./entity/Department";
const express = require('express');
import { createUserRouter } from "./routes/create_user";

const app = express();
app.use(express.json());

import { createConnection } from "typeorm";

const main = async () => {
    try {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "test_typeorm",
            synchronize: false,
            logging: false,
            entities: [User,UserDepartment, Department],
            migrations: [],
            subscribers: [],
            });
            console.log('Connected to Mysql');

            app.use("/", createUserRouter);

            app.listen(3000, () => 
                console.log('Server listing port http://localhost:3000/')
            );
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to db");
    }
}
// https://helpex.vn/question/typeorm-postgresql-cac-moi-quan-he-tai-hao-huc-duoc-dinh-nghia-la-luoi-bieng-60d83628853e4fd7cbcfc7af

main();