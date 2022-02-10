import './textbookView.scss';
import Component from '../_templates/component';
import { Header } from '../_templates/header/header';
import Footer from '../_templates/footer/footer';

class TextbookView extends Component {
  frontBlockContent = `Textbook 
  Page`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

  footer: Footer;

  constructor(root: HTMLElement) {
    super('div', ['textbook-view'], root);
    this.header = new Header(this.container);
    this.frontBlock = new Component('div', ['textbook-block', 'app-center-block'], this.container);
    this.footer = new Footer(this.container);
    this.frontBlock.container.append(this.frontBlockWrapper.container);
    this.frontBlockWrapper.container.innerHTML = this.frontBlockContent;
  }
}

export default TextbookView;
