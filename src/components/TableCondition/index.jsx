import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Grid, TableFilterRow, TableHeaderRow, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';
import Paper from '@material-ui/core/Paper';
import BodyCell from './components/BodyCell';

import settings from './tableSettings';

import data from './data';

/**
 * Компонент-класс TableCondition для выполнения отображения таблицы с информацией о трубе
 */
export default class TableCondition extends React.Component {
  static defaultProps = {};

  static propTypes = {
    pipeNumber: PropTypes.number.isRequired,
  };

  /**
   * Конструктор компонента с переопределением пропсов и стейтом.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      ...settings,
      rows: [],
    };
  }

  componentDidMount() {
    this.setState({
      rows: data[this.props.pipeNumber - 1],
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.pipeNumber !== this.props.pipeNumber) {
      this.setState({
        rows: data[this.props.pipeNumber - 1],
      });
    }
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <div className="table-wrapper">
        <Paper>
          <Grid
            rows={rows}
            columns={columns}
          >
            <FilteringState/>
            <SortingState
              defaultSorting={[{ columnName: 'min_thickness', direction: 'asc' }]}
            />
            <IntegratedSorting/>
            <IntegratedFiltering/>
            <VirtualTable cellComponent={BodyCell}/>
            <TableFilterRow/>
            <TableHeaderRow showSortingControls/>
          </Grid>
        </Paper>
      </div>
    );
  }
}
