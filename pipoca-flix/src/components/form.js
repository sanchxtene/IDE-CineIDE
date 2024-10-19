import React, { useState } from "react"

export default function Form() {

    const submitForm = (e) => {
        e.preventDefault()
      
        const formURL = e.target.action
        const data = new FormData()
      
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        })
      
        fetch(formURL, {
          method: "POST",
          body: data,
          headers: {
            'accept': 'application/json',
          },
        }).then(() => {
          setFormData({
            name: "",
            email: "",
            message: ""
          })
        })
      }

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
      
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        movie: "",
        level: "",
        submit: "",
        });

    return (
        <>
        <div id="container">
            <h1>COMPRAR INGRESSO</h1>
            <form method="POST" action="#" onSubmit={submitForm}>
                         
                <input placeholder="Nome" type="text" name="name" value={formData.name} onChange={handleInput} />
            
                <input placeholder="Email" type="text" name="email" value={formData.email} onChange={handleInput} />
                
                <input placeholder="Filme preferido" name="movie" value={formData.movie} onChange={handleInput}></input>
        
                <input placeholder="Nível de coragem" name="level" value={formData.level} onChange={handleInput}></input>
                
                <button type="submit">Enviar</button>
            </form>
            <img src="head.png" />
        </div>
        <style jsx>{`
                .container {
                    
                    background-color: #1c1c1c;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 0 auto;
                    text-align: center;
                    color: #fff;
                }
                div {
                    margin: 10% 0px 5% 10%;
                }
                h1 {
                    font-family: "Rammetto One", sans-serif;
                    color: #fff;
                    padding: 10px;
                }
                img {
                    width: 20%;
                    display: inline-block;
                    margin-left:5%;
                    margin-top: 0;
                    padding-top: 0;
                }
                form {
                    display: inline-block;
                    width: 60%;
                }
                input {
                    width: 95%;
                    height: 45px;
                    margin-bottom: 12px;
                    padding: 10px;
                    border-radius: 4px;
                    border: none;
                    background-color: #d35400;
                    color: #fff;
                    display: block;
                    font-size: 16px;
                }
                input::placeholder {
                    color: #fff;
                }
                
                button {
                    background-color: transparent;
                    border: 2px solid #d35400; 
                    color: #d35400; 
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top:5%;
                }
                button:hover {
                    background-color: #e67e22;
                }
                .{
                    font-family: var(--font-geist-mono);
                }
                
                
            
        `}</style></>
    )
}