import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngxs/store';
import { UpdateUser } from '../../state/app/app.actions';
import { Subscription, catchError, from, tap, throwError } from 'rxjs';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailCtrl: FormControl;
  loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private store: Store
  ) {
    this.emailCtrl = new FormControl('bhagyasudaraka98@gmail.com', [
      Validators.required,
      Validators.email,
    ]);

    this.loginFormGroup = new FormGroup({
      email: this.emailCtrl,
      password: new FormControl('password123', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onLogin() {
    const password = this.loginFormGroup.get('password')?.value;

    const authPromise = this.angularFireAuth.signInWithEmailAndPassword(
      this.emailCtrl.value,
      password
    );

    from(authPromise)
      .pipe(
        tap((credential) => {
          if (credential.user)
            this.store.dispatch(new UpdateUser(credential.user));
        }),
        tap(() => this.router.navigate(['/admin'])),
        catchError((e) => {
          return throwError(() => e);
        })
      )

      .subscribe();
  }
}
