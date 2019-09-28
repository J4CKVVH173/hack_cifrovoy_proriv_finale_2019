import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, TableFilterRow, TableHeaderRow, VirtualTable } from '@devexpress/dx-react-grid-material-ui';

import { FilteringState, IntegratedFiltering, IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';

import RowComponent from './components/RowComponent';
import BodyCell from './components/BodyCell/BodyCell';

import settings from './tableSettings';
import data from './data';

/**
 * Компонент-класс Pipelines для выполнения отображения списка труб и их состояний
 */
export default class Pipelines extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  /**
   * Конструктор компонента с переопределением пропсов и стейтом.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      ...settings,
      rows: data,
    };
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <FilteringState/>
          <SortingState
            defaultSorting={[{ columnName: 'status', direction: 'asc' }]}
          />
          <IntegratedSorting/>
          <IntegratedFiltering/>
          <VirtualTable cellComponent={BodyCell} rowComponent={RowComponent}/>
          <TableFilterRow/>
          <TableHeaderRow showSortingControls/>
        </Grid>
      </Paper>
    );
  }
}
