import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";
import BandInput from "./BandInput";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleSubmit(name) {
    dispatch(bandAdded(name));
  }

  const bandList = bands.map((band, index) => {
    return <li key={index}>{band}</li>;
  });
  return (
    <div>
      <BandInput onBandSubmit={handleSubmit} />
      <ul>{bandList}</ul>
    </div>
  );
}

export default BandsContainer;
