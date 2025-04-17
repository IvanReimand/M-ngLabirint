///Määrame suurus///
const mazeWidth = 20;
const mazeHeight = 20;
const maze = [];

for (let i=0; i<mazeHeight, i++) {
    maze[i] = [];
    for (let j=0; j<mazeWidth; j++) {
        maze[i][j] = 1;
    }
}
function generateMaze(x, y) {
    const directions = [
        [-1, 0], // üles
        [1, 0],  // alla
        [0, -1], // vasak
        [0, 1],  // parem
]};
directions.sort(() => Math.random() - 0.5);
