import React, { useState } from "react";

export default function SignUp() {
  const [state, setState] = useState({
    RoleId: "",
    FullName: "",
    Email: "",
    DOB: "",
    Address: "",
    Password: "",
    Contact: "",
    AlternativeContact: "",
    RelativePerson: "",
    RelativeContact: "",
    Designation: "",
    IsConfirm: "",
    Confirmation_Date: "",
    Joining_Date: "",
    Under_Probation: "",
    Probation_Period: "",
    Reporter: "",
    ProfileImage: "",
    Documents: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target, "---event---");
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="form container">
      <h1 style={{ color: "#411f60" }}>Registration :-</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <select
              name="RoleId"
              className="form-select mb-1"
              aria-label="Default select example"
              onChange={handleInputChange}
              value={state.RoleId}
            >
              <option disabled value="">
                Select role id
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div className="form-floating mb-1 col">
              <input
                id="Email"
                className="form-control"
                type="email"
                name="Email"
                value={state.Email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <label htmlFor="Email">Email :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Password"
                className="form-control"
                type="password"
                name="Password"
                value={state.Password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              <label htmlFor="Password">Password :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="RelativePerson"
                className="form-control"
                type="text"
                name="RelativePerson"
                value={state.RelativePerson}
                onChange={handleInputChange}
                placeholder="RelativePerson"
              />
              <label htmlFor="RelativePerson">RelativePerson :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="IsConfirm"
                className="form-control"
                type="text"
                name="IsConfirm"
                value={state.IsConfirm}
                onChange={handleInputChange}
                placeholder="IsConfirm"
              />
              <label htmlFor="IsConfirm">IsConfirm :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Under_Probation"
                className="form-control"
                type="text"
                name="Under_Probation"
                value={state.Under_Probation}
                onChange={handleInputChange}
                placeholder="Under_Probation"
              />
              <label htmlFor="Under_Probation">Under_Probation :-</label>
            </div>
            <div className="input-group mb-1 col">
              <label style={{ marginTop: "5px" }} htmlFor="ProfileImage">
                ProfileImage :-
              </label>
              <input
                id="ProfileImage"
                className="form-control"
                type="file"
                name="ProfileImage"
                value={state.ProfileImage}
                onChange={handleInputChange}
                placeholder="ProfileImage"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-1 col">
              <input
                id="DOB"
                className="form-control"
                type="date"
                name="DOB"
                value={state.DOB}
                onChange={handleInputChange}
                placeholder="DOB"
              />
              <label htmlFor="DOB">DOB :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Contact"
                className="form-control"
                type="text"
                name="Contact"
                value={state.Contact}
                onChange={handleInputChange}
                placeholder="Contact"
              />
              <label htmlFor="Contact">Contact :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="RelativeContact"
                className="form-control"
                type="text"
                name="RelativeContact"
                value={state.RelativeContact}
                onChange={handleInputChange}
                placeholder="RelativeContact"
              />
              <label htmlFor="RelativeContact">RelativeContact :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Confirmation_Date"
                className="form-control"
                type="date"
                name="Confirmation_Date"
                value={state.Confirmation_Date}
                onChange={handleInputChange}
                placeholder="Confirmation_Date"
              />
              <label htmlFor="Confirmation_Date">Confirmation_Date :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Probation_Period"
                className="form-control"
                type="text"
                name="Probation_Period"
                value={state.Probation_Period}
                onChange={handleInputChange}
                placeholder="Probation_Period"
              />
              <label htmlFor="Probation_Period">Probation_Period :-</label>
            </div>
            <div className="input-group mb-1 col">
              <label style={{ marginTop: "5px" }} htmlFor="Documents">
                Documents :-
              </label>
              <input
                id="Documents"
                className="form-control"
                type="file"
                name="Documents"
                value={state.Documents}
                onChange={handleInputChange}
                placeholder="Documents"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-1 col">
              <input
                id="FullName"
                className="form-control"
                type="text"
                name="FullName"
                value={state.FullName}
                onChange={handleInputChange}
                placeholder="FullName"
              />
              <label htmlFor="FullName">FullName :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <textarea
                id="Address"
                className="form-control"
                type="text"
                name="Address"
                value={state.Address}
                onChange={handleInputChange}
                placeholder="Address"
              />
              <label htmlFor="Address">Address :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="AlternativeContact"
                className="form-control"
                type="text"
                name="AlternativeContact"
                value={state.AlternativeContact}
                onChange={handleInputChange}
                placeholder="AlternativeContact"
              />
              <label htmlFor="AlternativeContact">AlternativeContact :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Designation"
                className="form-control"
                type="text"
                name="Designation"
                value={state.Designation}
                onChange={handleInputChange}
                placeholder="Designation"
              />
              <label htmlFor="Designation">Designation :-</label>
            </div>
            <div className="form-floating mb-1 col">
              <input
                id="Joining_Date"
                className="form-control"
                type="date"
                name="Joining_Date"
                value={state.Joining_Date}
                onChange={handleInputChange}
                placeholder="Joining_Date"
              />
              <label htmlFor="Joining_Date">Joining_Date :-</label>
            </div>
            <select
              name="Reporter"
              className="form-select mb-1"
              aria-label="Default select example"
              onChange={handleInputChange}
              value={state.Reporter}
            >
              <option disabled value="">
                Select reporter
              </option>
              <option value="MR">MR</option>
              <option value="BR">BR</option>
              <option value="CR">CR</option>
              <option value="VR">VR</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
