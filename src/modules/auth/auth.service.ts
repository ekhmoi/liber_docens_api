import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateTokenDto } from './dto/create-token.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtSrv: JwtService,
        private readonly userSrv: UserService
    ) { }

    async validateUser(payload): Promise<any> {
        return await this.userSrv.getById(payload._id);
    }

    async createToken(body: CreateTokenDto) {
        const user = await this.userSrv.getUserByEmail(body.email, true);
        const passwordIsValid = bcrypt.compareSync(body.password, user ? user.password : '');

        if (!passwordIsValid) {
            return {
                auth: false
            }
        } else {
            const token = this.jwtSrv.sign({ _id: user._id });
            return { auth: true, token };
        }
    }
}
