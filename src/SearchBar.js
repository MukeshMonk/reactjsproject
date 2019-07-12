import React from "react";
import Select from 'react-select';
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,
} from '@appbaseio/reactivesearch';
class SearchBar1 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption:null
    }
  }
}


const options = [
  { value: 'Black', label: 'Black' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Red', label: 'Red' },
  { value: 'Green', label: 'Green' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Violet', label: 'Violet' },
  { value: 'Yellow', label: 'Yellow' },
  { value: 'Purple', label: 'Purple'},
  { value: 'Indigo', label: 'Indigo' },
  { value: 'Pink', label: 'Pink' },
  { value: 'Magenta', label: 'Magenta' },
  { value: 'White', label: 'White'},
  { value: 'Brown', label: 'Brown'},
];
const weight = [
  { value: '0-35', label: '0 To 35' },
  { value: '36-40', label: '36 To 40' },
  { value: '41-50', label: '41 To 50' },
  { value: '51-60', label: '51 To 60' },
  { value: '61-70', label: '61 To 70' }
];
const height = [
  { value: '0-100', label: '0 To 100' },
  { value: '101-200', label: '101 To 200' },
  { value: '201-300', label: '201 To 300' },
];
const { selectedOption } = 'null';

const SearchBar = ({ onSearch,onSearch2,onSearch3,onSearch4,onSearch5,onSearch6 }) => {
 
  const handleChange = e => {
    onSearch( e.target.value);
  };
  const handleChanges2 = age => {
  onSearch2(age.target.value);
  };
  const handleChanges3 = e => {
    onSearch3(e.target.value);
  };
  const handleChanges4 = cl => {
    onSearch4(cl.value);
  };
  const handleChanges5 = wi => {
      onSearch5(wi.value);
  };
  const handleChanges6 = hi => {
    onSearch6(hi.value);
};
const handleChanges7 = hi => {
  ///onSearch7(hi.value);
  alert(hi.value);
};
  
  return (
   
    <div id="filter_li">
       
      <div id="color">Animal Name:</div>
    <div className=" input-group ">
      <input
        type="search"
        className="form-control"
        onChange={handleChange}
        placeholder="Animal Name"
        id="animal"
       
      />
    </div><br/>
    <div id="color2">Professions:</div>
     <div className=" input-group ">
     <input
       type="search"
       className="form-control"
       onChange={handleChanges3}
       placeholder="Professions"
       id="professions"
     />
   </div><br/>
   <div id="color3">Age:</div>
     <div className=" input-group ">
     <input
       type="search"
       className="form-control"
       onChange={handleChanges2}
       placeholder="Age"
       id="age"
       
     />
   </div><br/>
    <div id="color">Select Hair Color</div>
      <Select
      value={selectedOption}
      onChange={handleChanges4}
      options={options}
      id="hair"
    /> <br/>  
    <div id="color">Width</div>
      <Select
      value={selectedOption}
      onChange={handleChanges5}
      options={weight}
    
    /> <br/>  
    <div id="color">Height</div>
      <Select
      value={selectedOption}
      onChange={handleChanges6}
      options={height}
      
    /> <br/> 

      <ReactiveBase app="good-books-ds" credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d">
            <div className="row">
              <div className="col-sm-12">
              <div id="color">Height&Width:</div>
                <RangeSlider
                onChange={handleChanges6}
                  dataField="ratings_count"
                  componentId="BookSensor"
                  range={{
                  	start: 3000,
                  	end: 50000,
                  }}
                  rangeLabels={{
                    start: '30Yr',
                    end: '100Yr',
                  }}
                />
              </div>

              
            </div>
            </ReactiveBase>     
   </div>
  );
};


export default SearchBar;