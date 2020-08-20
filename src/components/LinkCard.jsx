import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Сь!лка</h2>
      <p>
        Ваша ссь!лка :{" "}
        <a href={link.to} target="blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Откуда :
        <a href={link.from} target="blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Количество кликов по ссь!лке :<strong> {link.clicks}</strong>
      </p>
      <p>
        Дата создания :
        <strong> {new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
