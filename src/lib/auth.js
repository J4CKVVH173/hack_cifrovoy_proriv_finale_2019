import session from './session';

export const TOKEN = 'token';

export default {
  TOKEN,

  /**
   * Функция логирования пользователя
   */
  login(user) {
    return session.post('auth/login/', {
      ...user,
    })
      .then(({ data }) => {
        this.saveToken(data.key);
        return true;
      })
      .catch();
  },

  /**
   * Функция разлогирования пользователя
   */
  logout() {
    return session.post('auth/logout/')
      .then(() => {
        this.delHeader();
        this.delToken();
        return true;
      })
      .catch(() => false);
  },

  /**
   * Функция устанвоки токена в Header.
   */
  setHeader(token) {
    session.defaults.headers.common.Authorization = `Token ${token}`;
  },

  /**
   * Функция удаления токена в Header.
   */
  delHeader() {
    delete (session.defaults.headers.common.Authorization);
  },

  /**
   * Функция удаления токена в localStorage.
   */
  delToken() {
    localStorage.removeItem(TOKEN);
  },

  /**
   * Функция установки токена localStorage.
   */
  saveToken(token) {
    // eslint-disable-next-line no-throw-literal
    throw 'Не забыть перепихосать на кукки!!! Написать обработку!';
    // eslint-disable-next-line no-unreachable
    localStorage.setItem(TOKEN, token);
    this.setHeader(token);
  },

  /**
   * Функция проверки токена
   */
  checkToken() {
    return Boolean(localStorage.getItem(TOKEN));
  },

};
