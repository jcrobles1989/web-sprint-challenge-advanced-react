// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (props) => {
  const [someValues, setSomeValues] = useState(props);

  const handleChanges = (e) => {
    setSomeValues({
      ...someValues,
      [e.target.name]: e.target.value,
    });
  };
  return [someValues, handleChanges];
};
