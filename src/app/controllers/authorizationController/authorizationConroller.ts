import AuthorizationView from '../../views/authorizationView/authorizationView';
import { State, state } from '../../models/api/state/state';
import Api from '../../models/api/api/AuthApi';

class AuthorizationController {
  view: AuthorizationView;

  model: State;

  api: Api;

  constructor(root: HTMLElement) {
    this.view = new AuthorizationView(root);
    this.model = state;
    this.api = new Api();
    this.register();
  }

  register() {
    this.view.frontBlock.container.addEventListener('click', async (e) => {
      let target = e.target as HTMLElement;

      if (target.tagName != 'BUTTON') return;

      let email = this.view.frontBlock.container.querySelector('#email') as HTMLInputElement;
      let name = this.view.frontBlock.container.querySelector('#name') as HTMLInputElement;
      let password = this.view.frontBlock.container.querySelector('#password') as HTMLInputElement;

      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!reg.test(email.value)) {
        email.style.borderColor = 'red';
      }
      await this.api.registerUser(name.value, email.value, password.value);
      await this.api.signInUser(email.value, password.value);
    });
  }
}

export default AuthorizationController;
