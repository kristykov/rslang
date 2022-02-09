import './header.scss';
import Component from '../component';
import defaultRoutes from '../../../models/router/defaultRoutes';

class Header extends Component {
  elemContent = `<nav class="navigation"> 
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
        <a href="#${defaultRoutes.authorization.path}" class="log-in">log-in</a>
        <a href="#${defaultRoutes.authorization.path}" class="sign-out hide">sign out</a>
      </nav>`;

  elemWrapper = new Component('div', ['container']);

  constructor(root: HTMLElement) {
    super('header', ['header'], root);
    this.elemWrapper.container.innerHTML = this.elemContent;
    this.container.append(this.elemWrapper.container);
  }
}

export default Header;
