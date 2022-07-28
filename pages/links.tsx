import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { allBooksQuery } from "../lib/querries";
import Linklist from "../components/Linklist";
import SignInLayout from "../components/SignInLayout";

const Links = () => {
  //Query links

  const { error, loading, data } = useQuery(allBooksQuery);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    {
      data ? setLinks(data.feed) : links;
    }
  }, [data]);

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    // console.log("error!");
    return <h3>Oops! something went wrong, {error.message}</h3>;
  }
  // console.log("first", data.feed);

  return (
    <div className="container">
      <SignInLayout />
      <div className="heads">
        <h1>ALL LINKS</h1>
      </div>
      <Linklist links={links} />
    </div>
  );
};

export default Links;
