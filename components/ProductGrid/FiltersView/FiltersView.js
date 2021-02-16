import React from 'react';

export default function FiltersView() {
  return (
    <div>
      <h1>Filter</h1>
      <div>Sort By</div>
      <div>
        <CheckBox label={'Featured'} />
        <CheckBox label={'Newest'} />
        <CheckBox label={'Price: High-Low'} />
        <CheckBox label={'Price: Low-High'} />
      </div>
      <hr />
      <div>Gender</div>
      <div>
        <CheckBox label={'Men'} />
        <CheckBox label={'Women'} />
        <CheckBox label={'Unisex'} />
      </div>
      <div>Shop By Price</div>
      <div>
        <CheckBox label={'50 - 100'} />
        <CheckBox label={'100 - 150'} />
        <CheckBox label={'Over 150$'} />
      </div>
    </div>
  );
}

const CheckBox = ({ label }) => {
  return (
    <div className="input input--checkbox input--large">
      <label>
        <input type="checkbox" />
        <span className="input__box"></span>
        <span>{label}</span>
      </label>
    </div>
  );
};
