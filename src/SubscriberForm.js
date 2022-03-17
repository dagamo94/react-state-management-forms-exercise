import { useState } from "react";

function SubscriberForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();

        console.log("Name: ", name);
        console.log("Email: ", email);

        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter your name:
                <input 
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleNameChange}
                    values={name}
                />
            </label>
            <label htmlFor="email">
                Enter your Email
                <input 
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleEmailChange}
                    value={email}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubscriberForm;