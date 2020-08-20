import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NawBar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const handlerLogout = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darkin-1">
        <span className="brand-logo">Создать ссь!лку</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Сь!лки</NavLink>
          </li>
          <li>
            <a href="/" onClick={handlerLogout}>
              Вь!йти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
