const checkValidInput = (loc, x, board) => {
  const len = board.getBoard().length;
  if (
    loc[0] >= len ||
    loc[1] >= len ||
    loc[0] < 0 ||
    loc[1] < 0 ||
    !x.includes(",") ||
    x[0] == "," ||
    x[len - 1] == "," ||
    board.getposition(loc[0], loc[1]) != board.getTheme()
  )
    return true;
};

const checkboard = (row, col, symbol, board) => {
  const len = board.getBoard().length;
  let win = { row: true, col: true, left: true, right: true };

  const conditions = (x, y) => {
    return board.getposition(x, y) != symbol;
  };

  for (let i = 0; i < len; i++) {
    if (conditions(row, i)) win.row = false;
    if (conditions(i, col)) win.col = false;
    if (conditions(i, i)) win.left = false;
    if (conditions(i, len - i - 1)) win.right = false;
  }

  return win.row || win.col || win.right || win.left;
};

module.exports = { checkValidInput, checkboard };
