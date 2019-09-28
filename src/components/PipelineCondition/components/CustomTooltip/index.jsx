import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * Кастомный тултип
 * @param active проверка что тултип активный
 * @param payload информация для тултипа
 * @param label  лейбел тултипа
 * @return {null|*}
 * @constructor
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          <span className="ball" style={{ background: payload[0].stroke }}/>
          {`${payload[0].name} : ${payload[0].value}`}
        </p>
        <p className="label">
          <span className="ball" style={{ background: payload[1].stroke }}/>
          {`${payload[1].name} : ${payload[1].value}`}
        </p>
        <p className="label">
          <span className="ball" style={{ background: payload[2].stroke }}/>
          {`${payload[2].name} : ${payload[2].value}`}
        </p>
        <p className="intro">Статус: {payload[0].payload.state}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.instanceOf(Array),
  label: PropTypes.number,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  label: 0,
};

export default CustomTooltip;
