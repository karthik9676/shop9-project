import React from 'react';
import './FilterSection.css';
import { useFilterContext } from '../context/filter_context';
import { FaCheck } from "react-icons/fa";
import FormatPrice from '../Helpers/FormatPrice';
import { MdCurrencyRupee } from "react-icons/md";


const FilterSection = () => {
  const {
    filters: { text, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters
  }
    = useFilterContext();
  
  // to get unique data of each field
  const getUniqueData = (data, attr) => {
    let newVal = data.map((item) => {
      return item[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return newVal = ["all", ...new Set(newVal)];

    // if (attr === "colors") {
    //   return newVal = ["All", ...new Set([].concat(...newVal))];
    // }
    // else {
    //   return newVal = ["All", ...new Set(newVal)];
    // }
   };

  
  // unique data
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <div>
      {/* search filter */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search"
          className="form-control w-75 mt-3"
          style={{fontSize:"2rem"}}
        />
      </form>
      {/* filter category */}
      <div className="">
        <h3 className="mt-3 category_title">Category</h3>
        <div className=' d-flex flex-column align-items-start'>
          {categoryData.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={item}
                onClick={updateFilterValue}
                className="category_btn"
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr className='w-25'/>
      </div>
      {/* filter company */}
      <div className="filter-company mt-3">
        <h3 className='company_title'>Company</h3>
        <form action="#">
          <select className='p-1 company_select' name="company" id="company" onClick={updateFilterValue}>
            {companyData.map((item, index) => {
              return (
                <option key={index} value={item} name="company">
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      {/* filter colors */}
      <div className="filter-colors mt-3">
        <h3 className='colors_title'>Colors</h3>
        <div>
          {colorsData.map((item, index) => {
            if (item === "all") {
              return (
                <button
                  key={index}
                  className="btn"
                  type="button"
                  style={{ fontSize:"1.8rem" }}
                  name="color"
                  value={item}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                className="btn"
                type="button"
                style={{ backgroundColor: item, fontSize:"1.8rem", margin:"0px 3px" }}
                name="color"
                value={item}
                onClick={updateFilterValue}
              >
                {color === item ? <FaCheck className=" text-white" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      {/* filter price */}
      <div className="filter-price">
        <h3 className='price_title'>Price</h3>
        <p className='range_filter'><MdCurrencyRupee/>{price}
          {/* <FormatPrice price={price} /> */}
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      {/* clear filters */}
      <div className="clear-filter mt-3">
        <button className="btn btn-danger clear_btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
