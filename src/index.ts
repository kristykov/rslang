import './sass/reset.scss';
import './sass/global.scss';
import App from './app/app';

const rootElem = document.getElementById('root') as HTMLElement;
if (rootElem) {
  const app = new App(rootElem);
  app.start();
}

export default rootElem;
