import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root',
})
export class ExistingUserService {
  constructor(private newUserService: RegisterService) {}

  usuarioJaExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.checkExistingUser(userName)
        ),
        map((user) => (user ? { userExist: true } : null)),
        first()
      );
    };
  }
}
