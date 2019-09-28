import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';

import { PIPELINES_NAMES } from '../../../../lib/constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '88%',
    padding: theme.spacing(2),
  },
}));

/**
 * Компонет для отображения фильтра столбца entry_type
 * @param onFilter - функция колбек дляу становления фильтра
 * @returns {*}
 * @constructor
 */
const SelectPipeline = ({ onFilter, pipe }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState(pipe);
  if (values !== pipe) setValues(pipe);
  /**
   * Функция для выставления текущего выбранного значения
   * @param event
   */
  const handleChange = (event) => {
    setValues(event.target.value);
    onFilter({ columnName: 'entry_type', operation: 'exact', value: event.target.value });
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        value={values}
        onChange={handleChange}
      >
        <MenuItem value={1}>{PIPELINES_NAMES[1]}</MenuItem>
        <MenuItem value={2}>{PIPELINES_NAMES[2]}</MenuItem>
      </Select>
    </FormControl>
  );
};

SelectPipeline.propTypes = {
  onFilter: PropTypes.func.isRequired,
  pipe: PropTypes.number.isRequired,
};

export default SelectPipeline;
