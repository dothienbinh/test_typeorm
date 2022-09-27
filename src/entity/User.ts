import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { UserDepartment } from "./UserDepartment";

@Entity('User')
export class User {
    static create(arg0: { code: any; firstName: any; lastName: any; age: any }) {
        throw new Error("Method not implemented.")
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(
        () => UserDepartment,
        userdepartment => userdepartment.user
    )
    userdepartments: UserDepartment[]

}
