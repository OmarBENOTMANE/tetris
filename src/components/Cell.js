import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { Tetrominos } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={Tetrominos[type].color} />
);
export default Cell;
