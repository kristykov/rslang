import GameSprintView from '../../views/gameSprintView/gameSprintView';
import { State, state } from '../../models/api/state/state';

class GameSprintController {
  view: GameSprintView;

  model: State;

  constructor(root: HTMLElement) {
    this.view = new GameSprintView(root);
    this.model = state;
  }
}

export default GameSprintController;
