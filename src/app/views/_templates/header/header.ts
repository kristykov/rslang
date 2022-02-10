import './header.scss';
import Component from '../component';
import defaultRoutes from '../../../models/router/defaultRoutes';
import { state } from '../../../models/api/state/state';
import rootElem from '../../../..';

export class Header extends Component {
  elemContent: string;
  elemWrapper = new Component('div', ['container']);

  registeredUser = `<a href="#${defaultRoutes.authorization.path}" class="sign-out">sign out</a>`;

  notRegisteredUser = `<a href="#${defaultRoutes.authorization.path}" class="log-in">log-in</a>`;

  content: string;

  constructor(root: HTMLElement) {
    super('header', ['header'], root);
    this.content = ``;
    this.elemContent = ``;
    this.chooseView();
  }

  chooseView() {
    if (state.checkAuthorized()) {
      this.content = this.registeredUser;
    } else {
      this.content = this.notRegisteredUser;
    }

    this.elemContent = `<nav class="navigation"> 
        <div class="title">
          <a href="#frontpage">
            <img src="./assets/icon.png" alt="icon" class="icon" />
          </a>  
          <h1 class="h1">RS-Lang</h1> 
        </div>       
        <a href="#${defaultRoutes.frontpage.path}" class="menu-item">Home</a>
        <a href="#${defaultRoutes.textbook.path}" class="menu-item">${defaultRoutes.textbook.name}</a>
        <a href="#${defaultRoutes.gameSprint.path}" class="menu-item">${defaultRoutes.gameSprint.name}</a>
        <a href="#${defaultRoutes.gameAudio.path}" class="menu-item">${defaultRoutes.gameAudio.name}</a>
        <a href="#${defaultRoutes.statistics.path}" class="menu-item">${defaultRoutes.statistics.name}</a>
        <a href="#${defaultRoutes.testpage.path}" class="menu-item">${defaultRoutes.testpage.name}</a>
        ${this.content}
      </nav>`;

    this.elemWrapper.container.innerHTML = this.elemContent;
    this.container.append(this.elemWrapper.container);
  }
}


export const header = new Header(rootElem);;
