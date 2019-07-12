import React from "react";

const Profession = ({ onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  return (
   
    <div id="filter_li">
    
    <div id="color">Professions:</div>
     <div className=" input-group ">
     <input
       type="search"
       className="form-control"
       onChange={handleChange}
       placeholder="Professions"
       id="professions"
     />
   </div><br/>
   
   </div>
  );
};


export default Profession;