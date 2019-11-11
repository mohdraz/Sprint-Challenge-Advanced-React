// import {useState} from "react";

// const useLocalStorage = (key, iniValue) => {
//     const[value, setValue] = useState( () => {
//         const item = window.localStorage.getItem(key);
//         if(item) {
//             return JSON.parse(item);
//         } else {
//             window.localStorage.setItem(key, JSON.stringify(iniValue));
//             return iniValue;
//         }
//     });

//     const setStoredValue = value => {
//         setValue(value);
//         window.localStorage.setItem(key, JSON.stringify(value));
//     };

//     return [value, setStoredValue];
// }

// export default useLocalStorage;

import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
