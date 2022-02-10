export class State {
  currentPage: number;
  isAuthorized: boolean;

  constructor() {
    this.currentPage = 1;
    this.isAuthorized = false;
  }

  // optional methods - not required for All fields
  set setCurrentPage(page: number) {
    this.currentPage = page;
  }

  get getCurrentPage() {
    return this.currentPage;
  }

  checkAuthorized() {
    return this.isAuthorized;
  }
}

export const state = new State();
