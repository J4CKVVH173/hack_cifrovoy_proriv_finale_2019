import { DEFAULT_API } from './commonInterfaces';
import auth from './auth';
import session from './session';

/**
 * Функция обработки ошибки при получении данных.
 * @param error
 */
const errorHandler = (error, reject) => {
  if (error.response !== undefined && error.response.status === 403) {
    auth.logout()
      .then()
      .catch();
  }
  reject(error);
};

export default {
  /**
   * API-метод для получения данных с сервера
   * @param requestUrl урл запроса
   * @param sendData передаваемые параметры
   * @param app запрашиваемое приложение
   * @returns {Promise<any>}
   */
  getContent(requestUrl, sendData, app = DEFAULT_API) {
    return new Promise((resolve, reject) => {
      let data = sendData;
      if (!sendData) data = {};
      const url = `${app}/${requestUrl}`;
      session.get(url, data)
        .then(resolve)
        .catch((error) => errorHandler(error, reject));
    });
  },
  /**
   * API-метод для отправки данных на сервер
   * @param requestUrl {string} урл запроса
   * @param sendData {Object} передаваемые параметры
   * @param sendMethod {string} метод запроса
   * @param app {string} запрашиваеме приложение
   * @param onUploadProgress {function} метод для выгрузки информации о процессе загрузки
   * @returns {Promise<any>}
   */
  sendContent(requestUrl, sendData, sendMethod = 'post', onUploadProgress = undefined, app = DEFAULT_API) {
    return new Promise((resolve, reject) => {
      const method = sendMethod;
      let data = sendData;
      if (!data) data = {};
      const url = `${app}/${requestUrl}/`;
      const requestConfig = {
        url,
        data,
        method,
        onUploadProgress,
      };
      session(requestConfig)
        .then(resolve)
        .catch((e) => errorHandler(e, reject));
    });
  },
};
