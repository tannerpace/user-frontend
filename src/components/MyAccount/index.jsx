import React from "react";
// import react hook form
import { useForm } from "react-hook-form";
//create a hook form to update user account information 


const MyAccount = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h1>My Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input

                    />

                </label>
                <br />
                <label>
                    Last Name:
                    <input

                    />

                </label>
                <br />
                <label>
                    Email:
                    <input

                    />

                </label>
                <br />
                <label>
                    Password:
                    <input

                    />

                </label>
                <br />
                <label>
                    Confirm Password:
                    <input

                    />

                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

//export default MyAccount;
export default MyAccount;