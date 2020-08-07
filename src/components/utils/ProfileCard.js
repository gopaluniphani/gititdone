import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="card-panel grey lighten-5 z-depth-1">
      <div className="row valign-wrapper">
        <div className="col s4">
          {!profile.url ? (
            <p className="center">
              <i className="material-icons medium">person</i>
            </p>
          ) : (
            <img src={profile.url} alt="" className="circle responsive-img" />
          )}
        </div>
        <div className="col s8">
          <p>
            {profile.first_name + " " + profile.last_name}
            <br />
            {profile.email}
            <br />
            {profile.phone}
            <br />
            {profile.specialization && (
              <span>
                {profile.specialization}
                <br />
              </span>
            )}
            {profile.expertise && (
              <span>
                {profile.expertise}
                <br />
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
