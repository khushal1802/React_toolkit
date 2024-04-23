import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Lan() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <select
      className="form-select mb-5"
      aria-label="Default select example"
      onChange={changeLanguage}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="hi">Hindi</option>
      <option value="ar">Arbi</option>
    </select>
  );
}

export default Lan;
