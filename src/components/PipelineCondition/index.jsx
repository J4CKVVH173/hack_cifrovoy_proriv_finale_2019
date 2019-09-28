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
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SelectPipeline from './components/SelectPipeline';

import './styles.css';
import CustomTooltip from './components/CustomTooltip';

const data = [
  { step: 0, middle: 4000, max: 2400, min: 2400, state: 'good' },
  { step: 10, middle: 3000, max: 1398, min: 2210, state: 'error' },
  { step: 20, middle: 2000, max: 9800, min: 2290, state: 'error' },
  { step: 30, middle: 2780, max: 3908, min: 2000, state: 'warning' },
  { step: 40, middle: 1890, max: 4800, min: 2181, state: 'good' },
  { step: 50, middle: 2390, max: 3800, min: 2500, state: 'warning' },
  { step: 60, middle: 2390, max: 3800, min: 2500, state: 'error' },
  { step: 70, middle: 3490, max: 4300, min: 2100, state: 'good' },
  { step: 80, middle: 3490, max: 4300, min: 2100, state: 'warning' },
  { step: 90, middle: 3490, max: 4300, min: 2100, state: 'warning' },
];


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
      width: window.innerWidth,
      scaleStep: 50,
      limit: 500,
      offset: 0,
      step: 10,
      count: 10,
      data,
    };
  }


  /**
   * Метод увеличения графика
   */
  addWidth = () => {
    this.setState((state) => ({
      width: state.width + state.scaleStep,
    }));
  };

  /**
   * Метод увеличения графика
   */
  subtractWidth = () => {
    this.setState((state) => ({
      width: state.width - state.scaleStep,
    }));
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

  render() {
    const { width, scaleStep, offset, limit, step } = this.state;
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
              {/*ToDo передать функцию для вызова с сервера данных для указанного трубовпровода*/}
              <SelectPipeline onFilter={() => console.log('lol')}/>
            </Grid>
            <Grid item xs={2} className="vert-center">
              <Typography variant="subtitle1">Управление размером:</Typography>
            </Grid>
            <Grid item xs={1} className="vert-center">
              <Fab
                size="medium"
                onClick={this.addWidth}
                color="primary"
                variant="round"
              >
                <Add/>
              </Fab>
            </Grid>
            <Grid item xs={1} className="vert-center">
              <Fab
                size="medium"
                onClick={this.subtractWidth}
                color="secondary"
                variant="round"
              >
                <Remove/>
              </Fab>
            </Grid>
            <Grid item xs={3} className="vert-center">
              <TextField
                id="scaleStep"
                label="Шаг"
                value={scaleStep}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
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
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1} className="vert-center">
              <Button variant="contained" color="primary" disabled={this.canStepBack()}>Назад</Button>
            </Grid>
            <Grid item xs={1} className="vert-center">
              <Button variant="contained" color="primary" disabled={this.canStepForward()}>Вперед</Button>
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
            <Tooltip content={<CustomTooltip />}/>
            <Legend/>
            <Line type="monotone" dataKey="max" stroke="#3CB371" activeDot={{ r: 6 }}/>
            <Line type="monotone" dataKey="middle" stroke="#87CEFA" activeDot={{ r: 6 }}/>
            <Line type="monotone" dataKey="min" stroke="#DC143C" activeDot={{ r: 6 }}/>
          </LineChart>
        </div>
      </Paper>
    );
  }
}
