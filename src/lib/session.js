import axios from 'axios';

// Настройка функционала прерывания запроса
const { CancelToken } = axios;
export const source = CancelToken.source();

const xsrfCookieName = 'csrftoken';
const xsrfHeaderName = 'X-CSRFToken';
const cancelToken = source.token;
const timeout = 100000;
const headers = {
  'Content-Type': 'application/json',
};

/**
 * Функция, возвращающая базовый урл для работы с сервером
 * @returns {string} базовый урл для запросов на сервер
 */
export function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    if (process.env.REACT_APP_DEPLOY_MODE === 'master') {
      // eslint-disable-next-line no-throw-literal
      throw 'Не настроен сервер';
      // eslint-disable-next-line no-unreachable
      return 'http://test';
    }
    // eslint-disable-next-line no-throw-literal
    throw 'Не настроен сервер';
    // eslint-disable-next-line no-unreachable
    return 'http://test1';
  }
  return 'http://192.168.43.219:8080';
}

const baseURL = getBaseUrl();

export const axiosRequestConfig = {
  baseURL,
  cancelToken,
  xsrfCookieName,
  xsrfHeaderName,
  timeout,
  headers,
};

const session = axios.create(axiosRequestConfig);

export default session;
