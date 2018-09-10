import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    async signIn() {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        const user = { email: 'user@email.com' };
        return this.jwtService.sign(user);
    }

    async validateUser(payload): Promise<any> {
        return { email: 'dashshaq@dash.aq' }
    }
}
