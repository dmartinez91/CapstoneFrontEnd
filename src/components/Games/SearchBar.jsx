import React from 'react';
import { Button } from 'react-bootstrap';
import useForm from './UseForm'

const SearchBar = (props) => {
    
    const {values, handleChange, handleSubmit} = useForm(props.makeSearch)
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            name="search" 
            value={values.search} 
            onChange={handleChange}
            />
            <Button type="submit" variant="secondary">Search</Button>{' '}
           
            
            </form>
            
        </div>
     );
}
 
export default SearchBar;