import React, { useContext } from "react";
import AlertContextApi from "../ContextGithubFinder/Alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContextApi);
  return (
    <div>
      {alert !== null && (
        <p className="flex items-start mb-4 space-x-2 text-red-600">
          {alert.type === "error" && <strong>{alert.msg}</strong>}
        </p>
      )}
    </div>
  );
};

export default Alert;
