import React from "react";
import PropTypes from "prop-types";

const LABEL_TEXT = "Select a column to filter: ";

// generate a field to select a column to filter
const ChooseColumn = props => {
  const { currentColumns, handleChange, value } = props;

  return (
    <label htmlFor={LABEL_TEXT}>
      {LABEL_TEXT}
      <select value={value} onChange={e => handleChange(e, value)}>
        <option />
        {currentColumns.map((column, i) => (
          <option key={i} value={column}>
            {column}
          </option>
        ))}
      </select>
    </label>
  );
};
ChooseColumn.defaultProps = {
  currentColumns: [],
  handleChange: () => {},
  value: ""
};

ChooseColumn.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  value: PropTypes.string
};

export default ChooseColumn;

// compare currentColumns against columns
