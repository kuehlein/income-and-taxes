import React from "react";
import PropTypes from "prop-types";
import MapSelect from "./MapSelect";

// map out filter fields
const MapFields = props => {
  const { template } = props;

  return (
    <div>
      {template &&
        template.map((field, i) => (
          <div key={i}>
            <MapSelect field={field} />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  template: [{}]
};

MapFields.propTypes = {
  template: PropTypes.arrayOf(PropTypes.object)
};

export default MapFields;
