import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import endpoint from "../config/endpoint";
import Loading from "../pages/Loading";
import authorized from "../helper/authorized.js";
export default function Authorized({ Component, Redirect }) {
  const { auth, profile } = endpoint;
  const [author, setAuthor] = useState(false);
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const checkAuth = async () => {
    const isAuth = await authorized();
    if (isAuth) {
      setAuthor(true);
      navigate(profile);
    } else {
      setAuthor(false);
      navigate(`${auth.root}/${auth.login}`);
    }
    setLoading(false);
  };
  useEffect(() => {
    checkAuth();
  }, []);
  if (loading) {
    return <Loading />;
  } else if (author) {
    return Component;
  } else {
    return Redirect;
  }
}
