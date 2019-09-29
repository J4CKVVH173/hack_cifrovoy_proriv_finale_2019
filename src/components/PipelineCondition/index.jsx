import React from 'react';
import LineChart from 'recharts/es6/chart/LineChart';
import XAxis from 'recharts/es6/cartesian/XAxis';
import YAxis from 'recharts/es6/cartesian/YAxis';
import CartesianGrid from 'recharts/es6/cartesian/CartesianGrid';
import Legend from 'recharts/es6/component/Legend';
import Line from 'recharts/es6/cartesian/Line';
import Tooltip from 'recharts/es6/component/Tooltip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';

import SelectPipeline from './components/SelectPipeline';
import TableCondition from '../TableCondition';

import './styles.css';
import CustomTooltip from './components/CustomTooltip';
import api from '../../lib/api';

/**
 * Компонент-класс PipelineCondition для выполнения отображения состояния трубовпровода
 */
export default class PipelineCondition extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  /**
   * Конструктор компонента с переопределением пропсов и стейтом.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth - 20,
      scaleStep: 50,
      limit: 500,
      offset: 200,
      step: 50,
      count: 10,
      maxShow: true,
      minShow: true,
      middleShow: true,
      loading: false,
      pipeline: 1,
      data: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState(() => ({
      pipeline: +id,
      loading: true,
    }));
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.loadData();
    }
  }

  getUpdatedData = () => this.setState(() => ({ loading: true }));

  /**
   * Метод выгружает данные с сервера.
   */
  loadData = () => {
    const { limit, offset, step, pipeline } = this.state;
    const url = `getRangeData/?limit=${limit}&offset=${offset}&delta=${step}&pipelineId=${pipeline}`;
    api.getContent(url).then(
      (response) => response.data,
    ).then(
      (d) => {
        this.setState((state) => ({
          data: d.data,
          count: d.count,
          loading: false,
        }));
      },
    );
  };

  /**
   * Метод обработки ввода в текстовое поле
   * @param event - событие ввода
   */
  handleChange = (event) => {
    const name = event.target.id;
    const { value } = event.target;
    this.setState((state) => ({
      ...state,
      [name]: +value,
    }));
  };

  /**
   * Метод записи в бд изменений о клике
   * @param name
   * @return {Function}
   */
  handleChangeChecked = (name) => (event) => {
    const { checked } = event.target;
    this.setState((state) => ({ ...state, [name]: checked }));
  };

  /**
   * Проверяется возможность сдвинуть график на один шаг вперед.
   */
  canStepForward = () => {
    const { limit, offset, count } = this.state;
    return !(((limit + offset) - count) <= count);
  };

  /**
   * Проверяется возможнолсть сдвинуть график на один шаг назад.
   */
  canStepBack = () => {
    const { limit, offset } = this.state;
    return !((offset - limit) >= 0);
  };

  /**
   * Метод для установки выбранной трубы
   */
  setPipeline = (pipe) => this.setState(() => ({ loading: true, pipeline: pipe.value }));

  /**
   * Метод для осуществления загрузки данных для графика на шаг вперед
   */
  stepForward = () => {
    this.setState((state) => ({
      loading: true,
      offset: state.offset + state.limit,
    }));
  };

  /**
   * Метод для осуществления выгрузки данных на шаг назад
   */
  stepBack = () => {
    this.setState((state) => ({
      loading: true,
      offset: state.offset - state.limit,
    }));
  };


  render() {
    const { width, offset, limit, step, maxShow, middleShow, minShow, data, pipeline } = this.state;
    return (
      <Paper>
        <div className="menu">
          <Grid container className="menu-wrapper">
            <Grid item xs={12}>
              <Typography variant="h5">Меню:</Typography>
            </Grid>
            <Grid item xs={2} className="vert-center">
              <Typography variant="subtitle1">Трубовпровод:</Typography>
            </Grid>
            <Grid item xs={3} className="vert-center">
              <SelectPipeline onFilter={this.setPipeline} pipe={pipeline}/>
            </Grid>
            <Grid item xs={2} className="vert-center">
              <Typography variant="subtitle1">Отображение:</Typography>
            </Grid>
            <Grid item xs={2} className="vert-center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={maxShow}
                    onChange={this.handleChangeChecked('maxShow')}
                    value="maxShow"
                    color="primary"
                  />
                }
                label="max"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={minShow}
                    onChange={this.handleChangeChecked('minShow')}
                    value="minShow"
                    color="primary"
                  />
                }
                label="min"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={middleShow}
                    onChange={this.handleChangeChecked('middleShow')}
                    value="middleShow"
                    color="primary"
                  />
                }
                label="middle"
              />
            </Grid>
            <Grid item xs={2} className="vert-center"/>
            <Grid item xs={2} className="vert-center">
              <Typography variant="subtitle1">Выборка:</Typography>
            </Grid>
            <Grid item xs={2} className="vert-center">
              <TextField
                id="offset"
                label="Начиная с"
                value={offset}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2} className="vert-center">
              <TextField
                id="limit"
                label="Выгрузить"
                value={limit}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2} className="vert-center">
              <TextField
                id="step"
                label="С шагом"
                value={step}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <Fab
                variant="round"
                onClick={this.getUpdatedData}
                style={{
                  marginLeft: 20,
                  background: 'rgb(198,198,198)#',
                }}
              >
                <Check/>
              </Fab>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1} className="vert-center">
              <Button variant="contained" color="primary" onClick={this.stepBack}>Назад</Button>
            </Grid>
            <Grid item xs={1} className="vert-center">
              <Button variant="contained" color="primary" onClick={this.stepForward}>Вперед</Button>
            </Grid>
          </Grid>
        </div>
        <div className="chart-wrapper">
          <LineChart
            width={width}
            height={500}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="step"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend/>
            {maxShow ? <Line type="monotone" dataKey="max" stroke="#3CB371" activeDot={{ r: 6 }}/> : null}
            {middleShow ? <Line type="monotone" dataKey="middle" stroke="#87CEFA" activeDot={{ r: 6 }}/> : null}
            {minShow ? <Line type="monotone" dataKey="min" stroke="#DC143C" activeDot={{ r: 6 }}/> : null}
          </LineChart>
        </div>
        <TableCondition pipeNumber={pipeline} />
      </Paper>
    );
  }
}
