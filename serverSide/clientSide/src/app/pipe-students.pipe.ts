import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model/User';
import { UserToSpec } from './model/UserToSpec';

@Pipe({
  name: 'pipeStudents'
})
export class PipeStudentsPipe implements PipeTransform {
  
  transform(selected: any, users: User[],userToSpecs:UserToSpec[]): User[] {    
    if(selected==null) return users;
    return users.filter(option => userToSpecs.find(f=>f.userId==option.userId&&f.specId==selected));
  } 
}
