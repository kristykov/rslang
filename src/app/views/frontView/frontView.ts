import './frontView.scss';
import Component from '../_templates/component';
import { Header } from '../_templates/header/header';
import Footer from '../_templates/footer/footer';

class FrontView extends Component {
  SectionMainContent = `<section class="main-page"> 
      <div class="greetings-box"> 
        <h2 class="greetings">Hey! Do you want to learn English easily? You to us!</h2>
        <p>RS Lang - an application for learning English in an easy game form.  
          Soon you will be able to watch your favorite series in the original  
          without waiting for the voice acting! What are you waiting for? Let's go! 
        </p> 
        <button class="learn-more">Learn more</button> 
      </div> 
      <img src="./assets/main-img.png" alt="main-img" class="main-img"></img> 
    </section>`;

  SectionMainWrapper = new Component('div', ['container']);

  SectionAdvatagesContent = `<section class="advantages">
      <div class="advantage">More than 3000 words, <br> divided into 6 sections.</div>
      <div class="advantage advantage-border">Daily statistics of learned words!<br> Improve it every day and reach new heights</div>
      <div class="advantage">Learning words in a playful way!<br> two mini-games for better word memorization</div>
    </section>`;

  SectionAdvatagesWrapper = new Component('div', ['container']);

  SectionInfoContent = `<section class="about-us">
      <div class="about-us-box">
        <h2 class="our-team-title">Our team</h2>
        <div class="team-card-box">
          <div class="teammate">
            <img src="https://avatars.githubusercontent.com/u/42784731?v=4" alt="kristina" class="teammate-img" >
            <div class="info-box">
              <a  href="https://github.com/kristykov" class="name">Kristina</a>
              <span class="position">Position</span>
              <p class="contribution-description">contribution-description</p>
              </div>
          </div>
          <div class="teammate">
            <img src="https://avatars.githubusercontent.com/u/54753081?v=4" alt="andrey" class="teammate-img">
            <div class="info-box">
              <a href="https://github.com/tlkv"class="name">Andrey</a>
              <span class="position">Position</span>
              <p class="contribution-description">contribution-description</p>
            </div>  
          </div>
          <div class="teammate">
            <img src="./assets/anastasiya.jpg" alt="anastasiya" class="teammate-img">
            <div class="info-box">
              <a href="https://github.com/AnastasiyaPoleshuk" class="name">Anastasiya</a>
              <span class="position">Position</span>
              <p class="contribution-description">contribution-description</p>
            </div>
          </div>
        </div>
      </div>
  </section>`;

  SectionInfoWrapper = new Component('div', ['container']);

  header: Header;

  SectionMain: Component;

  SectionAdvatages: Component;

  SectionInfo: Component;

  footer: Footer;

  constructor(root: HTMLElement) {
    super('div', ['front-view'], root);
    this.header = new Header(this.container);

    this.SectionMain = new Component('div', ['front-block', 'app-center-block'], this.container);
    this.SectionMain.container.append(this.SectionMainWrapper.container);
    this.SectionMainWrapper.container.innerHTML = this.SectionMainContent;

    this.SectionAdvatages = new Component(
      'div',
      ['advantages-block', 'app-center-block'],
      this.container,
    );
    this.SectionAdvatages.container.append(this.SectionAdvatagesWrapper.container);
    this.SectionAdvatagesWrapper.container.innerHTML = this.SectionAdvatagesContent;

    this.SectionInfo = new Component('div', ['info-block'], this.container);
    this.SectionInfo.container.append(this.SectionInfoWrapper.container);
    this.SectionInfoWrapper.container.innerHTML = this.SectionInfoContent;

    this.footer = new Footer(this.container);
  }
}

export default FrontView;
