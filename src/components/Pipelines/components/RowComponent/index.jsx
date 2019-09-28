import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import theme from '../../../../lib/theme';

import useStyles from './styles';

/**
 * Компонент расширяющий строку таблицы для возможности перехода при нажатии на нее
 * @param props
 * @returns {*}
 */
const RowComponent = (props) => {
  const classes = useStyles(theme);
  // нужно все это чтобы дропнуть параметр ломающий DOM
  // eslint-disable-next-line react/prop-types
  const { history, staticContext, ...rest } = props;
  /**
   * Функция для перехода для получения доп данных при нажатии на строку
   * @returns {void | * | number}
   */
  const pushTo = () => history.push(`/${rest.row.id}/condition`);
  return <Table.Row {...rest} className={`${classes.root}`} onClick={pushTo}/>;
};

RowComponent.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(RowComponent);
