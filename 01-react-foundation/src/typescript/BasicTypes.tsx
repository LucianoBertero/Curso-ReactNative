import React from "react";

export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 25;
  const isActive: boolean = true;

  const powers: string[] = ["Angular", "Vuejs", "React"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
      {}
    </>
  );
};
