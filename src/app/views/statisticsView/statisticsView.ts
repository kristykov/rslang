import './statisticsView.scss';
import Component from '../_templates/component';
import { Header } from '../_templates/header/header';
import Footer from '../_templates/footer/footer';

class StatisticsView extends Component {
  frontBlockContent = `Stats 
  Page`;

  frontBlockWrapper = new Component('div', ['container']);

  header: Header;

  frontBlock: Component;

  footer: Footer;

  constructor(root: HTMLElement) {
    super('div', ['statistics-view'], root);
    this.header = new Header(this.container);
    this.frontBlock = new Component(
      'div',
      ['statistics-block', 'app-center-block'],
      this.container,
    );
    this.footer = new Footer(this.container);
    this.frontBlock.container.append(this.frontBlockWrapper.container);
    this.frontBlockWrapper.container.innerHTML = this.frontBlockContent;
  }
}

export default StatisticsView;
