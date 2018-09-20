import { IsMongoId } from "class-validator";

export class CreateAssignmentDto {
    @IsMongoId()
    readonly owner: string;
    @IsMongoId()
    readonly assignee: string;
    @IsMongoId()
    readonly template: string;
}