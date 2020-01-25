import React, { useState } from "react";
import { TextInput, DropInput } from "../inputs/input.txt";
import formSchema from "./schemas/battleSchema.json";
import "./forms.scss";

const FormBattle: React.FC = (props: any) => {
  const [formState, setFormState] = useState({ ...formSchema });

  const handleChange = (event: any) => {
    const newState = { ...formState };
    (newState as any)[`${event.target.name}`].value = event.target.value;
    setFormState({ ...newState });
  };

  const renderInputs = (fields: Array<String>) => {
    const currentState = formState as any;
    return fields.map((field: any) => {
      if (currentState[field].type !== "ddl")
        return (
          <TextInput
            key={field}
            label={currentState[field].display}
            active={false}
            name={currentState[field].name}
            value={currentState[field].value}
            change={handleChange}
            type={currentState[field].type}
          />
        );

      return (
        <DropInput
          key={field}
          label={currentState[field].display}
          active={false}
          name={currentState[field].name}
          value={currentState[field].value}
          change={handleChange}
          type={currentState[field].type}
          options={["Number", "Text", "Boolean"]}
        />
      );
    });
  };

  return (
    <div className="battle-form-container">
      <div className="form-title">New Form</div>
      <form>
        <div className="single">
          {renderInputs(["challengeName", "description"])}
        </div>
        <div className="group">{renderInputs(["difficultly", "duration"])}</div>
        <div>{renderInputs(["functionParams"])}</div>
        <div className="inputs-groups">
          <div className="group-params">
            <div className="group-title">First params Group</div>
            <div className="section-input">
              {renderInputs([
                "paramA1",
                "typeA1",
                "paramA2",
                "typeA2",
                "desireA"
              ])}
            </div>
          </div>
        </div>
        <div className="inputs-groups">
          <div className="group-params">
            <div className="group-title">Second params Group</div>
            <div className="section-input">
              {renderInputs([
                "paramB1",
                "typeB1",
                "paramB2",
                "typeB2",
                "desireB"
              ])}
            </div>
          </div>
        </div>
        <div className="inputs-groups">
          <div className="group-params">
            <div className="group-title">Third params Group</div>
            <div className="section-input">
              {renderInputs([
                "paramC1",
                "typeC1",
                "paramC2",
                "typeC2",
                "desireC"
              ])}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormBattle;
