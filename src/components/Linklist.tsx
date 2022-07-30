import React from "react";
import Layout from "./Layout";
import Link from "./Link";

//@ts-ignore
const Linklist = ({ links }) => {
  return (
    <>
      <div className="card-grid">
        {
          //@ts-ignore
          links.map((link) => {
            return <Link link={link} key={link.id} />;
          })
        }
      </div>
    </>
  );
};
export default Linklist;
