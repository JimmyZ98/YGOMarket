import React from "react";
import "./Filter.scss";
import cardtype from "./cardtype.json";
import mosntertype from "./monstertype.json";
import attribute from "./attribute.json";

function Filter({ showFilter, handleFilterClick }) {
  return (
    <div className="filter">
      <div
        className={
          showFilter ? "filter__show filter__show--active" : "filter__show"
        }
      >
        <h3 className="filter__title">Filter</h3>
        <div className="filter__main">
          <input
            className="filter__search"
            type="text"
            placeholder="Search for a card"
          />
          <div className="filter__form-group">
            <label className="filter__label">Card type</label>
            <select className="filter__select">
              {cardtype.map((x) => (
                <option>{x}</option>
              ))}
            </select>
          </div>
          <div className="filter__form-group">
            <label className="filter__label">Monster Type</label>
            <select className="filter__select">
              {mosntertype.map((x) => (
                <option>{x}</option>
              ))}
            </select>
          </div>
          <div className="filter__form-group">
            <label className="filter__label">Attribute</label>
            <select className="filter__select">
              {attribute.map((x) => (
                <option>{x}</option>
              ))}
            </select>
          </div>
          <button className="filter__apply">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
