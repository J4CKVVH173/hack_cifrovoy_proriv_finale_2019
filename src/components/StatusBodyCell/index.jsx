import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { STATUS_COLORS } from '../../lib/constants';

/**
 * Компонент для отрисовки ячейки entry_type в человеко читабельном формате.
 * @param props - пропсы для ячейки
 * @returns {*} - node
 */
const Index = (props) => <Table.Cell {...props} style={{ background: STATUS_COLORS[props.value] }}/>;

export default Index;
