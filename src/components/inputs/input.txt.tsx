import React, { useState } from "react";
import "./inputs.scss";
type TextInput = {
  label: String;
  active: Boolean;
  name: any;
  value: any;
  type: String;
  change: (event: any) => any;
  options?: Array<String>;
};

export const TextInput = (props: TextInput) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`input-text-container ${props.value || focused ? "up" : ""}`}
    >
      <label>{props.label}</label>
      <input
        type={props.type as string}
        name={props.name}
        value={props.value}
        autoComplete="off"
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={event => props.change(event)}
      />
    </div>
  );
};

export const DropInput = (props: TextInput) => {
  const [focused, setFocused] = useState(false);
  const { options, value, label, name } = props;
  console.log(name);
  const handleSelection = (pick: String) => {
    props.change({ target: { name: name, value: pick } });
    setFocused(false);
  };
  return (
    <div className={`input-text-container ${props.value ? "up" : ""}`}>
      <label className="ddl-label">{label}</label>
      <div className="selection input" onClick={() => setFocused(true)}>
        {value}
      </div>
      <div className={`drop-list ${focused ? "open" : ""}`}>
        {options?.map(opt => (
          <div
            className={`${value === opt ? "input-active" : ""}`}
            onClick={() => handleSelection(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

// export default { TextInput };
