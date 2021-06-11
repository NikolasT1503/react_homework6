import React, { useState } from "react";
import Content from './Content';
import RecursiveButton from './RecursiveButton';

function Task3() {
  const [showMode, setShowMode] = useState(true);

  const handlerClick = () => {
    setShowMode(!showMode);
  };

  let content = null;

  if (showMode) {content = <Content/>}

  return (
    <div>
      <button onClick={handlerClick}>Show toggle</button>
      {content}
      <hr/>
      <RecursiveButton />
    </div>
  );
}

export default Task3;
