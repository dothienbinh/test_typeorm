import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, JoinTable } from "typeorm"
import { Department } from "./Department"
import { User } from "./User"

@Entity('UserDepartment')
export class UserDepartment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_user: number

    @Column()
    firstName: number

    @Column()
    id_department: number

    @Column()
    role: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(
        () => User,
        user => user.userdepartments
    )
    @JoinTable({
        name: 'userdepart_user',
        joinColumn: {
            name: "UserDepartment",
            referencedColumnName: "id_user"
        },
        inverseJoinColumn: {
            name: "User",
            referencedColumnName: "id"
        }
        
    })
    user: User

    @ManyToOne(
        () => Department,
        department => department.userdepartments
    )
    @JoinTable({
        name: 'userdepart_department',
        joinColumn: {
            name: "UserDepartment",
            referencedColumnName: "id_department"
        },
        inverseJoinColumn: {
            name: "Department",
            referencedColumnName: "id"
        }
        
    })
    department: Department



}
