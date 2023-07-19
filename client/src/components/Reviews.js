import React from "react";
import useExternalScripts from "../hooks/useExternalScripts";

export default function Reviews() {
  useExternalScripts("https://apps.elfsight.com/p/platform.js");
  return (
    <>
      <h1 className="text-3xl text-center">Reviews</h1>
      <div class="elfsight-app-d273d014-85bb-466f-84e3-76cb8f3cd4d5"></div>
    </>
  );
}
