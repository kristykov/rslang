import './authorizationView.scss';
import Component from '../_templates/component';
import Header from '../_templates/header/header';
import Footer from '../_templates/footer/footer';
import defaultRoutes from '../../models/router/defaultRoutes';

class AuthorizationView extends Component {
  authorizedUsersContent = `<div class="authorization">
    <img src="/assets/userIcon.png" alt="authorization img" class="authorization-img">
    <p class='auth-info'>You are authorized as </br>${localStorage.getItem('email')}</p>
    <a href="#${defaultRoutes.frontpage.path}">
    <button class="log-out" id="log-out"><i class="fa-solid fa-arrow-right-from-bracket"></i>
    log-out</button></a>
  </div>`;

  authorizationBlockContent = `<section class="authorization-box">
      <div class="err-description">OOPS! Incorrect e-mail or password</div>
      <img src="/assets/authorization-img.png" alt="authorization img" class="authorization-img">
      <div class="authorization">
        <p id="sign-in-link" class="view">don't have an account yet? Register now!</p>
        <h2 class="authorization-title">Nice to see you again!</h2>
        <span class="inputs-name">Email: <input type="email" class="text-input inputs" id="email"></span> 
        <span class="inputs-name">Password: <input type="password" class="password-input inputs" id="password"></span> 
        <button class="signIn-btn" id="signIn-btn">sign in</button>
      </div>
    </section>`;

  registrationBlockContent = ` <section class="authorization-box">
      <div class="err-description">OOPS! Incorrect e-mail or password</div>
      <img src="/assets/authorization-img.png" alt="authorization img" class="authorization-img">
      <div class="authorization">
        <p id="register-link" class="view">Do you already have an account?</p>
        <h2 class="authorization-title">Register and get access to additional features of the application</h2>
        <span class="inputs-name">Name: <input type="text" class="text-input inputs" id="name"></span> 
        <span class="inputs-name">Email: <input type="email" class="text-input inputs" id="email"></span>
        <div class="inputs-name">Password: <input type="password" class="password-input inputs" id="password"><br>
        <span>password length must be more than 8 characters</span>
        </div> 
        <button class="register-btn" id="register-btn">Register</button>
      </div>
    </section>`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

  frontBlockContent: string;

  footer: Footer;

  constructor(root: HTMLElement) {
    super('div', ['authorization-view'], root);
    this.header = new Header(this.container);
    this.frontBlock = new Component(
      'div',
      ['authorization-block', 'app-center-block'],
      this.container,
    );
    this.footer = new Footer(this.container);
    this.frontBlockContent = '';
  }
}

export default AuthorizationView;
