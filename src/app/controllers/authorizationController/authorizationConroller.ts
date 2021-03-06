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
    this.signIn();
    this.chooseView();
    this.logOut();
  }

  register() {
    this.view.frontBlock.container.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;

      if (target.id === 'register-btn') {
        const email = this.view.frontBlock.container.querySelector('#email') as HTMLInputElement;
        const name = this.view.frontBlock.container.querySelector('#name') as HTMLInputElement;
        const password = this.view.frontBlock.container.querySelector(
          '#password',
        ) as HTMLInputElement;

        await this.api.registerUser(name.value, email.value, password.value).then((response) => {
          if (response.isSucceeded) {
            this.model.isAuth = true;
            this.authReset();
            window.location.reload();
          } else {
            AuthorizationController.throwErrDescription(
              this.view.frontBlock.container.querySelector('.err-description') as HTMLElement,
            );
          }
        });
      }
    });
  }

  signIn() {
    this.view.frontBlock.container.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;

      if (target.id !== 'signIn-btn') return;

      const email = this.view.frontBlock.container.querySelector('#email') as HTMLInputElement;
      const password = this.view.frontBlock.container.querySelector(
        '#password',
      ) as HTMLInputElement;

      await this.api.signInUser(email.value, password.value).then((response) => {
        if (response.isSucceeded) {
          this.model.isAuth = true;
          this.authReset();
          window.location.reload();
        } else {
          AuthorizationController.throwErrDescription(
            this.view.frontBlock.container.querySelector('.err-description') as HTMLElement,
          );
        }
      });
    });
  }

  chooseView() {
    this.view.frontBlockContent = this.model.isAuth
      ? this.view.authorizedUsersContent
      : this.view.authorizationBlockContent;
    this.view.frontBlock.container.append(this.view.frontBlockWrapper.container);
    this.view.frontBlockWrapper.container.innerHTML = this.view.frontBlockContent;

    this.view.frontBlock.container.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName !== 'P') return;

      if (target.id === 'register-link') {
        this.view.frontBlockContent = this.view.authorizationBlockContent;
      } else {
        this.view.frontBlockContent = this.view.registrationBlockContent;
      }

      this.view.frontBlock.container.append(this.view.frontBlockWrapper.container);
      this.view.frontBlockWrapper.container.innerHTML = this.view.frontBlockContent;
    });
  }

  logOut() {
    this.view.frontBlock.container.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;

      if (target.id !== 'log-out') return;

      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      this.model.isAuth = false;
      this.authReset();
      window.location.reload();
    });
  }

  authReset() {
    this.model.textbookGroup = 0;
    this.model.textbookPage = 0;
    this.model.textbookShowDifficult = false;
    this.model.textbookShowLearned = false;
  }

  static throwErrDescription(errDescription: HTMLElement) {
    if (errDescription.classList.contains('hide')) {
      errDescription.classList.remove('hide');
    }
    errDescription.classList.add('visible');

    setTimeout(() => {
      if (errDescription.classList.contains('visible')) {
        errDescription.classList.remove('visible');
      }
      errDescription.classList.add('hide');
    }, 3000);
  }
}

export default AuthorizationController;
