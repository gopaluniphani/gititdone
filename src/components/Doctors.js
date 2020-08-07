import React, { Fragment } from "react";
import ProfileCard from "./utils/ProfileCard";
import useFirestore from "../hooks/useFirestore";

const Doctors = (props) => {
  const doctors = useFirestore("doctors");

  return (
    <Fragment>
      <br />
      <div className="container">
        <div className="row">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="col s12 m12 l6">
              <ProfileCard profile={doctor} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Doctors;
