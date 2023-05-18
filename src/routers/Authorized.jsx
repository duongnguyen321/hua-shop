import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import API from "../config";
import endpoint from "../config/endpoint";
import Profile from "../pages/Profile";
import axios from "axios";
import Loading from "../pages/Loading";
import Login from "../pages/Auth/Login";

export default function Authorized() {
  const { auth, profile } = endpoint;
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userId = useMemo(() => localStorage.getItem("user_id"), []);
  const url = useMemo(() => API.userId(userId), [userId]);

  useEffect(() => {
    if (userId) {
      axios.get(url).then((res) => {
        if (res.data) {
          setAuthorized(true);
          navigate(profile);
        } else {
          navigate(`${auth.root}/${auth.login}`);
        }
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [userId, url, navigate, profile, auth]);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else if (authorized) {
    return <Profile />;
  } else {
    return <Login />;
  }
}
