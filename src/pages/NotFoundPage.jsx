import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="text-3xl">
        <h2 className="font-bold">Not found!</h2>
        <p>
          <Link to="/">Go to Main</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
