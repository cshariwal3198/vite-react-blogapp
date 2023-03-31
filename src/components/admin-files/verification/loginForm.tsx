import { useState } from "react";
import { IAdminForm } from "../../../types/types";
import './loginForm.css';

export default function LoginForm({ varifyCredentials, account }: IAdminForm) {

    const [inputDetails, setInputDetails] = useState({ email: "", password: "" });
    const { email, password } = inputDetails;

    const getinputDetails = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputDetails({ ...inputDetails, [target.name]: target.value });
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        varifyCredentials(inputDetails);
        setInputDetails((prevState) => ({
            ...prevState, email: "", password: ''
        }));
    };

    return (

        <>
            <div>
                <h5>{account} Login</h5>
                <form onSubmit={onFormSubmit}>
                    <div>
                        <input type="email" placeholder="Enter email" name="email" autoComplete="off"
                            value={email}
                            onChange={(event) => getinputDetails(event)} />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter password" name="password" autoComplete="off"
                        value={password}
                            onChange={(event) => getinputDetails(event)} />
                    </div>
                    <input type="submit" />
                </form>

            </div>
        </>
    );
}
