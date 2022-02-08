class Api {
  private base = 'https://react-learnwords-example.herokuapp.com/' as string;

  private users = `${this.base}users` as string;

  private signin = `${this.base}signin` as string;

  userId: string;

  email: string;

  token: string;

  refreshToken: string;

  constructor() {
    this.userId = localStorage.getItem('userId') as string;
    this.email = localStorage.getItem('email') as string;
    this.token = localStorage.getItem('token') as string;
    this.refreshToken = localStorage.getItem('refreshToken') as string;
  }

  registerUser = async (name: string, email: string, password: string) => {
    const response = (
      await fetch(this.users, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
    ).json();
    const { id, name: userName, email: userEmail } = await response;
    console.log(id, userName, userEmail);
  };

  signInUser = async (email: string, password: string) => {
    const response = (
      await fetch(this.signin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
    ).json();
    const {
      message, token, refreshToken, userId,
    } = await response;
    await this.setLocalStorage(userId, email, token, refreshToken);
    console.log(` message: ${message}, token, refreshToken, userId: ${userId}`);
  };

  getAllWords = async (group = 1, page = 1) => {
    const response = (await fetch(`${this.base}words?group=${group}&page=${page}`)).json();
    return response;
  };

  getWordById = async (wordId: string) => {
    const response = (await fetch(`${this.base}words/${wordId}`)).json();
    return response;
  };

  setLocalStorage = async (userId: string, email: string, token: string, refreshToken: string) => {
    Object.assign(this, {
      userId, email, token, refreshToken,
    });
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return true;
  };
}
export default Api;
