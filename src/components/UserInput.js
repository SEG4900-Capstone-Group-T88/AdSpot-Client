import React, { useRef, useEffect } from "react";

export default function UserInput({
  autocomplete: autocompleteProp,
  myLabel,
  myTooltip,
  type,
  name,
  placeholder,
  id,
  onChange,
}) {
  const inputRef = useRef(null);
  const autocomplete = useRef(null);

  useEffect(() => {
    if (inputRef.current && autocompleteProp && window.google) {
      autocomplete.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: ["CA"] },
          fields: ["place_id", "formatted_address"],
        }
      );
    }
  }, [autocompleteProp, onChange, inputRef.current, window.google]);

  return (
    <div className="justify-start">
      <div className="mb-3">
        <label
          htmlFor="exampleEmail0"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          <div className="flex items-center">
            <span className="mr-2">{myLabel}</span>
            {myTooltip && myTooltip}{" "}
          </div>
          <input
            ref={inputRef}
            type={type}
            name={name}
            placeholder={placeholder}
            className="
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id={id}
            onChange={onChange}
            onBlur={onChange}
          />
        </label>
      </div>
    </div>
  );
}