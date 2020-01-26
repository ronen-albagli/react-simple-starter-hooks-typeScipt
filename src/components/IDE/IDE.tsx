import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const IDE = (props: any) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "25px",
        width: "45%",
        height: "800px"
      }}
    >
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={props.change}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
          }}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`${props.codeStr}`}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2
          }}
          style={{
            backgroundColor: "#0000001a",
            width: "100%",
            height: "800px"
          }}
        />
      </div>
    </div>
  );
};

export default IDE;
