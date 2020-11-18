import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Entity()
export class User {

    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column()
    name!: string;

    @Column()
    lastName!: string

    @Column()
    password!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    @CreateDateColumn()
    createdAt!: Date;

    @Column()
    @UpdateDateColumn()
    updateAt!: Date;

    hashPassword(): void{
        this.password = bcryptjs.hashSync(this.password, 10);
    }

    checkPassword(password: string): boolean{
        return bcryptjs.compareSync(password, this.password)
    }

    
}