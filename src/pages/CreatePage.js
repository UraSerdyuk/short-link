import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );

        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
  return (
    <div className="row ">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field ">
          <input
            placeholder="Вставте ссь!лку"
            id="link"
            type="text"
            name="email"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Введите ссь!лкук</label>
        </div>
      </div>
    </div>
  );
};
