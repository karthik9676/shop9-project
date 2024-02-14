import React from 'react';
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();


  return (
    <div className=' d-flex justify-content-between align-items-center my-4'>
      <div>
        <button
          className={grid_view ? 'btn btn-secondary mx-2 bg-dark' : 'btn btn-secondary mx-2'}
          onClick={ ()=>setGridView()}
        >
          <BsFillGridFill/>
        </button>
        <button
          className={grid_view ? 'btn btn-secondary mx-2' : 'btn btn-secondary mx-2 bg-dark'}
          onClick={ ()=>setListView()}
        >
          <BsList/>
        </button>
      </div>
      <div>
        <h5 style={{fontSize:"2rem"}}>
          {`${filter_products.length} Products Available`}
        </h5>
      </div>
      <div>
        <form>
          <label htmlFor='sort'></label>
          <select style={{fontSize:"1.8rem"}} name='sort' id='sort' onClick={sorting} >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
            <option value="#" disabled></option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort;
