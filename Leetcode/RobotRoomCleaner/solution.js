const cleanRoom = (robot) => {
  const visited = new Set();
  cleanCell(robot, visited, 0, 0);
};

const cleanCell = (robot, visited, x, y) => {
  const key = "" + x + ',' + y;
  if (visited.has(key)) {
    return;
  }
  robot.clean();
  visited.add(key);
  if (moveUp(robot)) {
    cleanCell(robot, visited, x, y + 1);
    moveDown(robot);
  }
  if (moveLeft(robot)) {
    cleanCell(robot, visited, x - 1, y);
    moveRight(robot);
  }
  if (moveRight(robot)) {
    cleanCell(robot, visited, x + 1, y);
    moveLeft(robot);
  }
  if (moveDown(robot)) {
    cleanCell(robot, visited, x, y - 1);
    moveUp(robot);
  }
};

const moveUp = (robot) => {
  return robot.move();
};

const moveRight = (robot) => {
  robot.turnRight();
  const canMove = robot.move();
  robot.turnLeft();
  return canMove;
};

const moveLeft = (robot) => {
  robot.turnLeft();
  const canMove = robot.move();
  robot.turnRight();
  return canMove;
};

const moveDown = (robot) => {
  robot.turnRight();
  robot.turnRight();
  const canMove = robot.move();
  robot.turnLeft();
  robot.turnLeft();
  return canMove;
};

module.exports = { cleanRoom }
