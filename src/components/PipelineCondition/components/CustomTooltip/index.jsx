import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const TooltipPayload = (props) => props.payloads.map((payload) => {
  return (
    <p className="label">
      <span className="ball" style={{ background: payload.stroke }}/>
      {`${payload.name} : ${payload.value}`}
    </p>
  );
});

/**
 * Кастомный тултип
 * @param active проверка что тултип активный
 * @param payload информация для тултипа
 * @param label  лейбел тултипа
 * @return {null|*}
 * @constructor
 */
const CustomTooltip = ({ active, payload }) => {
  let tooltipText = null;
  if (payload) {
    tooltipText = <TooltipPayload payloads={payload}/>;
  }
  if (active) {
    return (
      <div className="custom-tooltip">
        {tooltipText}
        {payload ? <p className="intro">Статус: {payload[0].payload.state}</p> : null}
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
