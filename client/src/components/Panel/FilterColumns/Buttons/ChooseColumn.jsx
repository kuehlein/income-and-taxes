import React from "react";
import PropTypes from "prop-types";

const LABEL_TEXT = "Filter Column: ";

// generate a field to select a column to filter
const ChooseColumn = props => {
  const {
    chooseVisibilityFilterField,
    currentColumns,
    handleChange,
    value
  } = props;

  return (
    <div className="input-group-prepend group-margin">
      <label className="input-group-text" htmlFor={LABEL_TEXT}>
        <div className="label-pad">{LABEL_TEXT}</div>
        <select
          className="custom-select"
          value={value}
          onChange={e => {
            chooseVisibilityFilterField(!e.target.value);
            handleChange(value, e.target.value);
          }}
        >
          <option />
          {currentColumns.map((column, i) => (
            <option key={i} value={column}>
              {column}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
ChooseColumn.defaultProps = {
  chooseVisibilityFilterField: () => {},
  currentColumns: [],
  handleChange: () => {},
  value: ""
};

ChooseColumn.propTypes = {
  chooseVisibilityFilterField: PropTypes.func,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  value: PropTypes.string
};

export default ChooseColumn;
