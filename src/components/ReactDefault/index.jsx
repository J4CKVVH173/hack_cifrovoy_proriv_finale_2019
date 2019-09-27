import React from 'react';

/**
 * Компонент-класс ReactDefault для выполнения проверки работоспособности
 */
export default class ReactDefault extends React.Component {
  static defaultProps = {};

  static propTypes = {};


  /**
   * Конструктор компонента с переопределением пропсов и стейтом.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}
