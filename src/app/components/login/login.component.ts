import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppService } from '../../service/app.service';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  providers:[provideAnimations()],
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  {

  public ismobile:boolean=false;
  public loginForm!: UntypedFormGroup;
  public isAuthLoading = false;
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService){
    this.isMobileMenu();
  }
  ngOnInit() {
    /* this.renderer.addClass(
        document.querySelector('app-root'),
        'login-page'
    ); */
    this.loginForm = new UntypedFormGroup({
        usuario: new UntypedFormControl(null, Validators.required),
        password: new UntypedFormControl(null, Validators.required)
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.isMobileMenu();
  }
  async loginByAuth() {
    if (this.loginForm.valid) {
        this.isAuthLoading = true;
        await this.appService.loginByAuth(this.loginForm.get("usuario")?.value,this.loginForm.get("password")?.value);
        this.isAuthLoading = false;
    } else {
        this.toastr.error('Form is not valid!');
    }
}
  isMobileMenu() {
    console.log(window.innerWidth)
    if (window.innerWidth > 991) {
      this.ismobile= false;
      console.log(this.ismobile)
      return;
    }
    this.ismobile= true;
    console.log(this.ismobile)
    return;
  };
}
