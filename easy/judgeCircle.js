const judgeCircle = function(moves) {
    const coords = { x: 0, y: 0 };

    for (let move of moves) {
        if (move === 'U') {
            coords.y++;
        } else if (move === 'D') {
            coords.y--;
        } else if (move === 'L') {
            coords.x--;
        } else if (move === 'R') {
            coords.x++;
        }
    }

    return coords.x === 0 && coords.y === 0;
};

console.log( judgeCircle('UD') );