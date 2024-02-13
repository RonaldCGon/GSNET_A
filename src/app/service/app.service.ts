import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { sleep } from '../utils/helpers';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;

    constructor(private router: Router, private toastr: ToastrService) {}

    async loginByAuth(email: string, password: string) {
        try {
          console.log('email',email)
            await authLogin(email, password);
            await this.getProfile();
            this.router.navigate(['/admin/home']);
            this.toastr.success('Login success');
        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async registerByAuth(email: string, password: string) {
        try {
          await authLogin(email, password);
          await this.getProfile();
          this.router.navigate(['/']);
          this.toastr.success('Register success');
        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async loginByGoogle() {
        try {
          this.toastr.warning('Not implemented');

        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async registerByGoogle() {
        try {
          this.toastr.warning('Not implemented');

        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async loginByFacebook() {
        try {
          this.toastr.warning('Not implemented');

        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async registerByFacebook() {
        try {

            this.toastr.warning('Not implemented');
        } catch (error) {
            this.toastr.error((error as Error).message);
        }
    }

    async getProfile() {
        try {
            const user = await getAuthStatus();
            if(user) {
              this.user = user;
            } else {
              this.logout();
            }
          } catch (error) {
          this.logout();
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('gatekeeper_token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}


export const authLogin = (email: string, password: string) => {
  return new Promise(async (res, rej) => {
    await sleep(500);
    if (email === 'averas' && password === '*****') {
      localStorage.setItem(
        'authentication',
        JSON.stringify({ profile: { usuario: 'averas' } })
      );
      return res({ profile: { usuario: 'averas' } });
    }
    return rej({ message: 'Credentials are wrong!' });
  });
};

export const getAuthStatus = () => {
  return new Promise(async (res, rej) => {
    await sleep(500);
    try {
      let authentication = localStorage.getItem('authentication');
      if (authentication) {
        authentication = JSON.parse(authentication);
        return res(authentication);
      }
      return res(undefined);
    } catch (error) {
      return res(undefined);
    }
  });
};
