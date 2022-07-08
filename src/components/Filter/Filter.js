import React from "react";
import "./Filter.scss";
import cardtype from "./cardtype.json";
import mosntertype from "./monstertype.json";
import attribute from "./attribute.json";

function Filter({ showFilter, darkMode, handleSearch }) {
  return (
    <div className="filter">
      <div
        className={
          darkMode
            ? showFilter
              ? "filter__show filter__show--active darkmodefb"
              : "filter__show darkmodefb"
            : showFilter
            ? "filter__show filter__show--active"
            : "filter__show"
        }
      >
        <h3 className="filter__title">Filter</h3>
        <div className="filter__main">
          <input
            className={darkMode ? "filter__search darkmodef" : "filter__search"}
            type="text"
            placeholder="Search for a card"
            onChange={handleSearch}
          />
          <div className="filter__form-group">
            <label className="filter__label">Card type</label>
            <select
              className={
                darkMode ? "filter__select darkmodef" : "filter__select"
              }
            >
              {cardtype.map((x, index) => (
                <option key={index}>{x}</option>
              ))}
            </select>
          </div>
          <div className="filter__form-group">
            <label className="filter__label">Monster Type</label>
            <select
              className={
                darkMode ? "filter__select darkmodef" : "filter__select"
              }
            >
              {mosntertype.map((x, index) => (
                <option key={index}>{x}</option>
              ))}
            </select>
          </div>
          <div className="filter__form-group">
            <label className="filter__label">Attribute</label>
            <select
              className={
                darkMode ? "filter__select darkmodef" : "filter__select"
              }
            >
              {attribute.map((x, index) => (
                <option key={index}>{x}</option>
              ))}
            </select>
          </div>
          <button className={darkMode ? "darkmodeapply" : "filter__apply"}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
