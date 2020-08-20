import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHttp } from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";
import { LinksList } from "../components/LinksList";

import { Loader } from "../components/Loader";

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "Get", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && <LinksList links={links} />}</>;
};
