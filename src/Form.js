import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorOnusername, seterrorOnUsername] = useState('');
  const [errorOnemail, seterrorOnEmail] = useState('');
  const [errorOnpassword, seterrorOnPassword] = useState('');
  const [errorOnconfirmPassword, seterrorOnConfirmPassword] = useState('');

  const validate = () => {
    if(username.length > 8){
      seterrorOnUsername('');
    }
    else {
      seterrorOnUsername('Username must be 8 letters long');
    }
    if(email.includes('@gmail')){
      seterrorOnEmail('');
    }
    else {
      seterrorOnEmail('please enter valid email');
    }
    if(password.length > 8 && password.includes('.')){
      seterrorOnPassword('');
    }
    else {
      seterrorOnPassword("password should be 8 letters long and it should contains '.'");
    }
    if(password !== '' && password === confirmPassword){
      seterrorOnConfirmPassword('');
    }
    else {
      seterrorOnConfirmPassword('password not matched');
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Form Validations</h1>
          <input
            type="text"
            placeholder="username"
            className="form-control "
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p>{errorOnusername}</p>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>{errorOnemail}</p>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>{errorOnpassword}</p>
          <input
            type="text"
            placeholder="confirm password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p>{errorOnconfirmPassword}</p>
          <button className="btn btn-success" onClick={validate}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
