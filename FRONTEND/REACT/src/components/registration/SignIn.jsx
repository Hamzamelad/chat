import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import { StyledSignIn } from "./StyledSignIn";
import { useAuth } from "../../context/AuthContext";

function SignIn() {
    const username = React.useRef()
    const password = React.useRef()

    const {signin} = useAuth()

    const handleSignin = () => {
        signin({
            "username": username?.current.value,
            "password": password?.current.value
        })
    }

    return (
        <StyledSignIn>
            <div className="container">
                <MDBContainer fluid className="p-3 my-5">
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Email address"
                                id="formControlLg"
                                type="email"
                                size="lg"
                                ref={username}
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Password"
                                id="formControlLg"
                                type="password"
                                size="lg"
                                ref={password}
                            />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheckDefault"
                                    label="Remember me"
                                />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSignin}>
                                Sign in
                            </MDBBtn>

                            <div className="divider d-flex align-items-center justify-content-center my-4" >
                                <p className="text-center fw-bold mx-3 mb-0">
                                    OR
                                </p>
                            </div>

                            <MDBBtn
                                className="mb-4 w-100"
                                size="lg"
                                style={{ backgroundColor: "#3b5998" }}
                            >
                                <MDBIcon
                                    fab
                                    icon="facebook-f"
                                    className="mx-2"
                                />
                                Continue with facebook
                            </MDBBtn>

                            <MDBBtn
                                className="mb-4 w-100"
                                size="lg"
                                style={{ backgroundColor: "#55acee" }}
                            >
                                <MDBIcon fab icon="twitter" className="mx-2" />
                                Continue with twitter
                            </MDBBtn>
                </MDBContainer>
            </div>
        </StyledSignIn>
    );
}

export default SignIn;
