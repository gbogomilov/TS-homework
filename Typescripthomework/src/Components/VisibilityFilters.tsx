import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { typeActions } from "redux/actionTypes";

interface FiltersType {
  activeFilter: string;
  setFilter: (filter: string) => typeActions;
}

const VisibilityFilters = ({ activeFilter, setFilter }: FiltersType) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey: string) => {
        const currentFilter: string = VISIBILITY_FILTERS[filterKey as keyof {}];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: { visibilityFilter: string }) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
