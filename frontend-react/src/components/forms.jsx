import { useState } from "react"
import api from "../api";
import { Navigate, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Carousel from "./carousel/carousel";


export default function Form({ route, type }) {
    const [isLoading, setIsLoading] = useState(false);
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [loged, setloged] = useState(false);

    const navigate = useNavigate();
    const name = type === "login" ? "Login" : "Register"

    async function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password, firstname, lastname, email })
            if (type === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
                setloged(true)
            } else {
                navigate("/login")
            }

        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <div className="container">


            <div className="row align-items-center g-lg-5 py-5">
                <div className="col col-md-5 col-lg-6 text-center text-lg-start text-md-start">
                    <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">Welcome, {name}</h1>
                    {<Carousel></Carousel>}
                    
                </div>
                <div className="col-sm-0 col-md-7 mx-auto col-lg-6 ">
                    <form className="p-2 p-md-5 border rounded-3 bg-body-tertiary needs-validation" onSubmit={handleSubmit}>
                        {
                            type === "register" &&
                            <>
                                <div className="form-floating mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="FirstName"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        id="first_name"
                                        placeholder="First Name"
                                        required />
                                    <label for="first_name" className="form-label">First name</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="LastName"
                                        id="inputLastName"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        placeholder="Last Name"
                                        required />
                                    <label for="last_name" className="form-label">Last name</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="emailHelpId"
                                        placeholder="abc@mail.com"
                                        required
                                    />
                                    <label for="email" className="form-label">Email address</label>

                                </div>

                            </>
                        }
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-describedby="helpId"
                                placeholder="your costome username"
                                required
                            />
                            <label for="username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                            /> <label for="password">Password</label>
                        </div>
                        {
                            type === "register" &&
                            <>
                                <div class="col-12 mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div></>
                        }

                        <button className="w-100 btn btn-lg btn-primary" type="submit">{name}</button>
                        <hr className="my-4" />
                        <small className="text-body-secondary">
                            {type === "login" ? <p> Don't have an account? <a className="btn btn-outline-secondary" href="/register">Register</a></p> : <p>Already have an account? <a className="btn btn-outline-success" href="/login">Login</a></p>}
                        </small>
                    </form>
                </div>
            </div>
        </div>

    )
}

