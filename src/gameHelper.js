export const STAGE_WIDTH = 12;
export const STAGE_HEIGH = 20;

export const createStage = () =>
  Array.from(
    Array(STAGE_HEIGH),
    () => new Array(STAGE_WIDTH).fill([0, "clear"]),
  );
