export const STAGE_WIDTH = 12;
export const STAGE_HEIGH = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGH), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"]),
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //ckecing we'are on an actual cell
      if (player.tetromino[y][x] !== 0) {
        if (
          //checking our move is inside areas height y, we shouldnt go through the bottom area
          !stage[y + player.pos.y + moveY] ||
          //checking our move is inside areas width x
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //checking that cell we're moving isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
