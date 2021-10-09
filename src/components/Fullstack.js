import React, {useState} from 'react';
import '../App.css';
import Axios from 'axios'


function Fullstack() {
  // create state that will hold the values submitted in from the input fields
const [name, setname] = useState("");
const [age, setage] = useState(0);

const [country, setcountry] = useState("");
const [position, setposition] = useState("");
const [wage, setwage] = useState(0);

//create a state that will store the data from the db
// it will be set to an empty array 
const [person, setperson] = useState([]);

//create the function to fetch the data and send it to the backend
const addEmployee = ()=>{
  try{
    Axios.post("http://localhost:3001/create",{
      
      name: name,
      
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(()=>{
      console.log("success")
    }) 
    }
    catch(err){
    console.log(err)
  }
}
//create a function to get data from the database and display them
const getEmployee = ()=>{
  try{ 
    Axios.get("http://localhost:3001/employees",{
     }).then((response)=>{
      setperson(response.data)
    }) 
    }
    catch(err){
    console.log(err)
  }
}
//in the inputs create a function that will get the input data when the user types ONCHANGE

  return (
    <div className="App">
    <div className="infor">
    <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}} />
    
    <input type="number" placeholder="Age" onChange={(e)=>{setage(e.target.value)}} />
    <input type="text" placeholder="Country" onChange={(e)=>{setcountry(e.target.value)}}/>
    <input type="text" placeholder="Position" onChange={(e)=>{setposition(e.target.value)}}/>
    <input type="number" placeholder="Wage (year /s)" onChange={(e)=>{setwage(e.target.value)}}/>
    <button onClick={addEmployee}>Add Employee</button>
   
    </div>
    <div>
    <hr/>
    <button onClick={getEmployee}>Show Employee</button>
    {
      <table>
      <tr>
        <th>ID</th>
        
        <th>NAME</th>
        <th>AGE</th>
        <th>COUNTRY</th>
        <th>POSITION</th>
        <th>WAGE (year)</th>
        </tr></table>}
        {
      person.map((val, key)=>{
        return (<div>
        <table>
        
        <tr>
        <td>{val.ID}</td>
        
        <td>{val.name}</td>
        <td>{val.age}</td>
        <td>{val.country}</td>
        <td>{val.position}</td>
        <td>{val.wage}</td>
        </tr>
        
        </table>
        </div>)
        
      })
    }</div>
    </div>
  );
}

export default Fullstack;
