import './authorizationView.scss';
import Component from '../_templates/component';
import Header from '../_templates/header/header';
import Footer from '../_templates/footer/footer';
import defaultRoutes from '../../models/router/defaultRoutes';

class AuthorizationView extends Component {
  frontBlockContent = ` <section class="authorization-box">
      <img src="/assets/authorization-img.png" alt="authorization img" class="authorization-img">
      <div class="authorization">
        <h2 class="authorization-title">Register and get access to additional features of the application</h2>
        <span class="inputs-name">Email: <input type="email" class="text-input inputs" id="email"></span> 
        <span class="inputs-name">Name: <input type="text" class="text-input inputs" id="name"></span> 
        <span class="inputs-name">Password: <input type="password" class="password-input inputs" id="password"></span> 
        <a href="#${defaultRoutes.frontpage.path}"><button class="register-btn">Register</button></a>
      </div>
    </section>`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

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
    this.frontBlock.container.append(this.frontBlockWrapper.container);
    this.frontBlockWrapper.container.innerHTML = this.frontBlockContent;
  }
}

export default AuthorizationView;
