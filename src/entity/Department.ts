import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { UserDepartment } from "./UserDepartment";

@Entity('Department')
export class Department {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    desc: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(
        () => UserDepartment,
        userdepartment => userdepartment.department
    )
    userdepartments: UserDepartment[]
}
