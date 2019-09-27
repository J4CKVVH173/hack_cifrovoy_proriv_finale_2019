import React from 'react';

export const ContentContext = React.createContext({});

/**
 *
 * @param Component - компонент который будет обернут в контекст
 * @return {*}
 */
export default (Component) => class WithContext extends React.PureComponent {
  // eslint-disable-next-line
  render() {
    return (
      <ContentContext.Consumer>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {(context) => <Component {...this.props} context={context} />}
      </ContentContext.Consumer>
    );
  }
};
