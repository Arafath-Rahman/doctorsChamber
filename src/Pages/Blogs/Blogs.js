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
            <p>Answer</p>
          </article>
          <article>
            <h2 className="fw-light fs-4"><strong className="text-info text-decoration-underline">Question2:</strong> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Answer</p>
          </article>
          <article>
            <h2 className="fw-light fs-4"><strong className="text-info text-decoration-underline">Question3:</strong> What other services does firebase provide other than authentication?</h2>
            <p>Answer</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
