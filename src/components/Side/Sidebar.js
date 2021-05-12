import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./SideBar.css"
import { productsContext } from '../../Context/ProductsContext';

export default function Sidebar({history}) {
    
  const { getProducts } = useContext(productsContext);
  const [category, setCategory] = useState(getCategory());
 

  function getCategory() {
    const search = new URLSearchParams(history.location.search);
    return search.get("type");
  }
  const handleChangeCategory = (e) => {
    if (e.target.value === "All") {
      history.push(`${history.location.pathname.replace("type")}`);
      getProducts(history);
      setCategory(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("type", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setCategory(e.target.value);
  };

  return (
      <div className="container2">
          <FormControl component="fieldset">
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup 
            value={category}
            onChange={handleChangeCategory}
            aria-label="сategory"
            name="сategory">
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="Tank" control={<Radio />} label="Tank" />
              <FormControlLabel value="Uron" control={<Radio />} label="Uron" />
              <FormControlLabel value="Support" control={<Radio />} label="Support" />
            </RadioGroup>
          </FormControl>
      </div>
        );
}
