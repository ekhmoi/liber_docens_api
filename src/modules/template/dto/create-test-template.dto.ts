
import { ValidateNested, IsString, IsNumber, IsOptional, } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateTestTemplateDto {
    @IsOptional()
    @IsString()
    readonly image: string;
    @IsOptional()
    @IsString()
    readonly audio: string;
    @IsOptional()
    @IsString()
    readonly question: string;
    @ValidateNested({each: true})
    @Type(() => TestOptionDto)
    readonly options: TestOptionDto[];
    @IsNumber()
    readonly correctValue: number;
}

export class TestOptionDto {
    @IsString()
    readonly text: string;
    @IsNumber()
    readonly value: number;
}
