import { Table } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import StatusBodyCell from '../../StatusBodyCell';

/**
 * Компонент для отрисовки отдельно взятой ячейки
 * @param props - пропсы для ячейки
 * @returns {*} - node
 * @constructor
 */
const BodyCell = (props) => {
  let cell;
  if (props.column.name === 'status') cell = <StatusBodyCell {...props} />;
  else cell = <Table.Cell {...props} />;
  return cell;
};

export default BodyCell;
