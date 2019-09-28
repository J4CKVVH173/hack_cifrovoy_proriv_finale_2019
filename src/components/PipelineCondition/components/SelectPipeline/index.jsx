import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';

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
const SelectPipeline = ({ onFilter }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState(' ');
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
        <MenuItem value={1}>Трубопровод</MenuItem>
        <MenuItem value=""> </MenuItem>
      </Select>
    </FormControl>
  );
};

SelectPipeline.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default SelectPipeline;
