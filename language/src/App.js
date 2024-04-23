import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import Lan from "./Lan";

function App() {
  const { t } = useTranslation();

  const {sentens} = t("dec",{humans:"XYZ"})

  return (
    <div className="container mt-5">
      <Lan />
      <h1>{t("greeting")}</h1>
      <Trans  i18nKey={sentens} 
      value={{humans:"XYZ"}}
      components={{1:<b/>}}
      />
    </div>
  );
}

export default App;
