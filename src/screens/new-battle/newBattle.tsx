import React from "react";
import FormBattle from "../../components/forms/battleForm";
import IDE from "../../components/IDE/IDE";

const NewBattle: React.FC = (props: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <FormBattle />
      <IDE />
    </div>
  );
};

export default NewBattle;
