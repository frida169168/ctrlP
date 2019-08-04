import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model/User';

@Pipe({
  name: 'studentPipe'
})
export class StudentPipe implements PipeTransform {

  transform(value:User,selected: User, users: User[],userToSpecs:any[]): User[] {
    if(selected==null)
      return users;    
    return users.filter(option => userToSpecs.find(f=>f.userId==option.userId&&f.specId==selected));
  }

  

  
}
