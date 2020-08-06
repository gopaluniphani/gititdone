import React, { Fragment } from "react";
import ProfileCard from "./utils/ProfileCard";
import useFirestore from "../hooks/useFirestore";

const Lawyers = (props) => {
  const lawyers = useFirestore("lawyers");

  return (
    <Fragment>
      <br />
      <div className="container">
        <div className="row">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="col s12 m6">
              <ProfileCard profile={lawyer} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Lawyers;
