import React from "react";

function InfoCardPickUp() {
  return (
    <div className="infocard">
      <section className="smallcard">
        <input type="radio" />
        <label htmlFor="Pick-Up" className="smallcard__label">
          Pick - Up
        </label>
        <div className="infocard__details">
          <div className="infocard__details__border">
            <h3 className="infocard__details__title">Locations</h3>
            <select name="location" id="location">
              <option className="infocard__details__options" value="location">
                Semarang
              </option>
            </select>
          </div>
          <div className="infocard__details__border">
            <h3 className="infocard__details__title">Date</h3>
            <select name="date" id="date">
              <option className="infocard__details__options" value="date">
                20 July 2022
              </option>
            </select>
          </div>
          <div className="infocard__details__border">
            <h3 className="infocard__details__title">Time</h3>
            <select name="time" id="time">
              <option className="infocard__details__options" value="time">
                07.00
              </option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoCardPickUp;
