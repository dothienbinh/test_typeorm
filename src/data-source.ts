import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entity/Department"
import { User } from "./entity/User"
import { UserDepartment } from "./entity/UserDepartment"


export const AppDataSource = new DataSource({
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
})
