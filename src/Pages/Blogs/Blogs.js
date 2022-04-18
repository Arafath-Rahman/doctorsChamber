import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div style={{marginTop: '100px'}} className="container mx-auto border mb-5">
      <div className="p-3">
        <h1 className="text-center my-3 text-decoration-underline fw-bold text-info">Blogs</h1>
        <div>
          <article>
            <h2 className="fw-light fs-4"><strong className="text-info text-decoration-underline">Question1:</strong> What is the difference between authorization and authentication?</h2>
            <p>Answer: Authentication and Authorization both have significant differences. We use Authentication to verify the user's identity so that we know who the user is. Where as Authorization is used to give Access of some data/information/features to users based on their roles. Authorization limits or controls users access over resources whereas Authentication is a process to verify a users identity. For example in airport, first airlines checks who we are, then after verifying our identity and they provides us services we've registered for. </p>
          </article>
          <article>
            <h2 className="fw-light fs-4"><strong className="text-info text-decoration-underline">Question2:</strong> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Answer: I am using Firebase now for only 'Authentication' and 'Hosting' my site. Firebase made our live easy by writing behind the scene logics that are needed to implement for User Authentication. There are many alternatives of firebase for use authentication. They are: Auth0, Passport, Octa, JSON Web Token, and KeyCloak etc.</p>
          </article>
          <article>
            <h2 className="fw-light fs-4"><strong className="text-info text-decoration-underline">Question3:</strong> What other services does firebase provide other than authentication?</h2>
            <p>Answer: Firebase Provides many services along with Authentication. It provides Hosting services, Cloud Storage Services, Realtime Database, Cloud Messaging, Firebase Machine Learning Services, Cloud Functions, Remote Config and many more. It's Authentication and Database services are popular and very developer friendly.</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
