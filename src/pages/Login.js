import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {

        e.preventDefault();
        
        try {
            
            const res = await fetch('http://localhost:3001/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log(res);

        } catch (error) {
            console.log(error)
        }
        

    }

    return ( 
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

            
                <label htmlFor="username" >Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <br />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br />

                <button type="submit">Submit</button>

            </form>
        </div>
     );
}
 
export default Login;