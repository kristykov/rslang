import './testView.scss';
import Component from '../_templates/component';
import { Header } from '../_templates/header/header';
import Footer from '../_templates/footer/footer';

class TestView extends Component {
  frontBlockContent = `TEST
  Page ( click ON IT TO CHANGE state and draw some API data)`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

  footer: Footer;

  constructor(root: HTMLElement) {
    super('div', ['test-view'], root);
    this.header = new Header(this.container);
    this.frontBlock = new Component('div', ['test-block', 'app-center-block'], this.container);
    this.footer = new Footer(this.container);
    this.frontBlock.container.append(this.frontBlockWrapper.container);
    this.frontBlockWrapper.container.innerHTML = this.frontBlockContent;
  }
}

export default TestView;
