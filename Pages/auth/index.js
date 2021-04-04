import React from "react";

import User from "../../Component/User";
const indexPage = (props) => (
  <div>
    <h1>The Auth Index Page of {props.appName}</h1>
    <User name="Van Nguyen" age={24}></User>
  </div>
);

indexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "AHIhi" });
    }, 1000);
  });
  return promise;
};

export default indexPage;
