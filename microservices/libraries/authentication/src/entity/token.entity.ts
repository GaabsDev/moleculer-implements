import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('token')
export class TokenEntity {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	username: string;

	@Column()
	password: string;

    @Column()
	secret: string;

    @Column()
	token: string;

	constructor(username: string, password: string, secret: string, token: string,) {
		this.username = username;
		this.password = password;
        this.secret = secret;
        this.token = token;
	}
}