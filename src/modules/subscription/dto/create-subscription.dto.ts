import { IsString } from 'class-validator';
export class CreatUserDtoProfile {
}

export class CreateSubscriptionDto {
    @IsString()
    readonly subscriber: string;
}

