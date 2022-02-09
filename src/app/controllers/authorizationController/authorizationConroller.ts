import AuthorizationView from '../../views/authorizationView/authorizationView';
import { State, state } from '../../models/api/state/state';
import Api from '../../models/api/api/AuthApi';
import Header from '../../views/_templates/header/header';

class AuthorizationController {
  view: AuthorizationView;

  header: Header;

  model: State;

  api: Api;

  constructor(root: HTMLElement) {
    this.view = new AuthorizationView(root);
    this.header = new Header(root);
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

      let logInButton = this.header.container.querySelector('.log-in') as HTMLElement;
      let signOutButton = this.header.container.querySelector('.sign-out') as HTMLElement;

      logInButton.classList.add('hide');
      signOutButton.classList.remove('hide');
      console.log(signOutButton.classList.contains('hide'));

      await this.api.registerUser(name.value, email.value, password.value);
      await this.api.signInUser(email.value, password.value);
    });
  }
}

export default AuthorizationController;
