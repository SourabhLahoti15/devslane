import React, { memo } from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ImSpinner9 className="text-3xl animate-spin" />
    </div>
  );
}
export default memo(Loading);
