import React, {useContext, useEffect} from "react";

import DataContext from "./DataContext";

import "./Section.css"

function Section() {
    const {user, setUser} =  useContext(DataContext)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((res) => setUser(res));
}, [])
    
  

    return (
        <ul className="container">
            {user.map((person) => {
              return (
                <div className="card">
                    <h1>{person.name}</h1>
                    <p>Email: {person.email}</p>
                    <p>Phone: {person.phone}</p>
                </div>
              )
            })}
        </ul>
    )
};

export default Section;