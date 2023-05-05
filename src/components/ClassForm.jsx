import { useState } from "react";

function ClassForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

   
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }

    const handleChange = (e) => {
        e.preventDefault;
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
  return (
    <>
    <h1>FUNCTIONAL METHOD</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" name="name" onChange={handleChange}/><br/><br/>
            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" onChange={handleChange}/><br/><br/>
            <label htmlFor="password">
                Password:
            </label>
            <input type="password" name="password" id="password" onChange={handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default ClassForm