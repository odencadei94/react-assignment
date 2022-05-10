import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Axios from "axios";
import Table from './components/Table';

const Board = () => {

// states
const [people, setPeople] = useState([]);
const [isLoading, setIsLoading] = useState(false); 
const [filterText, setFilterText] = useState();
const [peopleList, setPeopleList] = useState([]);

//function that fill people const with api data
const fetchPeople = async () => {
    setIsLoading(true);
    const { data } = await Axios.get(
        "https://swapi.dev/api/people"
    );
    
    const prod = data;
    setPeople(prod.results);
    setPeopleList(prod.results);
    setIsLoading(false);
};

useEffect(() => {
    fetchPeople();
}, []);  

useEffect(() => {
    filter();
}, [filterText]);

const handleChange = (event) => {
    setFilterText(event.target.value);
}

//function that filter people by text in filterField
const filter = () => {
setPeopleList(people.filter(prova => prova.name.toLowerCase().match(filterText.toLowerCase())))

}

if(isLoading)
{
    return(
    <div>
        loading
    </div>)
}

return (
     <div className="container">
        <input className="filterField" type="text" name="filterField" onChange={handleChange}></input>
        <Table value={peopleList}/>
    </div>     
    );
}

// ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Board />);