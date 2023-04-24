import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { TIME_FILTER_OPTIONS } from "../../util/constants";

function TimeFilters({ enabled, onChange }) {
  return (
    <ToggleButtonGroup type="checkbox" value={enabled} onChange={onChange}>
      {TIME_FILTER_OPTIONS.map((range, index) => (
        <ToggleButton
          id={`time-btn-${index}`}
          value={index}
          className="btn btn-light border rounded mr-1"
        >
          {range[1] === Infinity
            ? `${range[0]}+ min`
            : `${range[0]}-${range[1]} min`}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default TimeFilters;
