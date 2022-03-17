import { useState } from "react";

function SubscriberForm({createSubscriber}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        name && email ? console.log("Submitted: ", name, email): console.log("Inputs must not be empty strings and must submit both a name and email");
        if(name && email) createSubscriber({name, email});
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
                    value={name}
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