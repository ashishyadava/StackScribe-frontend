import { useState } from "react";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: "",
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
            
            const res = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if(res.ok) {
                const result = await res.json();
                console.log("User signed up:", result);
                alert("Sign-up successful");
            } else {
                console.log("Sign-up failed:", res.statusText);
                alert("Sign-up failed. Please try again");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }

    }



    return ( 
        <div>
            <h1>Sign-up</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name" >Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <br />


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
 
export default SignUp;