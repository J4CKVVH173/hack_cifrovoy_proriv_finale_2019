import * as PropTypes from 'prop-types';
import React from 'react';
import { ContentContext } from './withContext';


/**
 * Класс провайдер для контекста.
 */
export default class GlobalProvider extends React.Component {
  /**
   * Задание глобального стейта.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
   * Стандартная функция рендер, которая возвращает созданный контекст.
   * @return {*}
   */
  render() {
    const { children } = this.props;
    const store = {};

    return (
      <ContentContext.Provider
        value={store}
      >
        {children}
      </ContentContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
