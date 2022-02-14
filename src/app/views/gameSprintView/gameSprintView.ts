import './gameSprintView.scss';
import Component from '../_templates/component';
import Header from '../_templates/header/header';

class GameSprintView extends Component {
  frontBlockContent = `Sprint Game 
  Page`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

  constructor(root: HTMLElement) {
    super('div', ['game-sprint-view'], root);
    this.header = new Header(this.container);
    this.frontBlock = new Component('div', ['game-sprint-block', 'app-center-block'], this.container);
    this.frontBlock.container.append(this.frontBlockWrapper.container);
    this.frontBlockWrapper.container.innerHTML = this.frontBlockContent;
  }
}

export default GameSprintView;
