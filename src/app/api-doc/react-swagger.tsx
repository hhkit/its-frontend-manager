"use client";

import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type Props = {
  spec: Record<string, object>;
};

function ReactSwagger({ spec }: Props): React.JSX.Element {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;
