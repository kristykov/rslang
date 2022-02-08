import TestView from '../../views/testView/testView';
import { State, state } from '../../models/api/state/state';
// import testApi from '../../models/api/api/testApi';
import Api from '../../models/api/api/AuthApi';

class TestController {
  view: TestView;

  model: State;

  api: Api;

  constructor(root: HTMLElement) {
    this.view = new TestView(root);
    this.model = state;
    this.api = new Api();
    this.customEventListener();
  }

  customEventListener() {
    this.view.frontBlock.container.addEventListener('click', async (e) => {
      console.log(
        'I catch Event! ',
        e,
        'showState + increase by 1 and DRAW IT',
        (this.model.currentPage += 1),
      );
      console.log('state now', state);
      // this.view.frontBlockWrapper.container.innerHTML += `current state change ${
      //   state.currentPage
      // } words data
      // ${JSON.stringify(await testApi())} `; // appernd received data to current page
      // eslint-disable-next-line max-len
      // const words = await this.api.getAllWords();
      // const word = await this.api.getWordById('5e9f5ee35eb9e72bc21af710');
      await this.api.registerUser('Van', 'van@user1.com', 'Gfhjkm_123hhhh');
      await this.api.signInUser('van@user1.com', 'Gfhjkm_123hhhh');
    });
  }
}

export default TestController;
