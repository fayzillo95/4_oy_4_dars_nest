import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username xato' })
  username: string;
  constructor(username : string){
        this.username = username
  }
}
