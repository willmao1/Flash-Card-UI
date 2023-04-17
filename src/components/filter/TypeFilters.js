import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { TYPES } from "../../util/constants";

function TypeFilters({ enabled, onChange }) {
  return (
    <ToggleButtonGroup type="checkbox" value={enabled} onChange={onChange}>
      {TYPES.map((type, index) => (
        <ToggleButton
          id={`type-btn-${index}`}
          value={index}
          className="btn btn-light border rounded mr-1"
        >
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default TypeFilters;
