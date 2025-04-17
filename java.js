///Määrame suurus///
const mazeWidth = 20;
const mazeHeight = 20;
const maze = [];

for (let i=0; i<mazeHeight; i++) {
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
];

directions.sort(() => Math.random() - 0.5); //et oli suva labirint iga kord

    for (let [dx, dy] of directions) {
        const nx = x + dx * 2;
        const ny = y + dy * 2;

        if (nx >= 0 && ny >= 0 && nx < mazeHeight && ny < mazeWidth && maze[nx][ny] === 1) {
            maze[nx][ny] = 0; // tee
            maze[x + dx][y + dy] = 0; // Открываем стену

            generateMaze(nx, ny); // Рекурсивный вызов для следующей ячейки
        }
    }
}

maze[1][1] = 0; // punkt 
generateMaze(1, 1);

function renderMaze() {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = '';

    for (let i = 0; i < mazeHeight; i++) {
        for (let j = 0; j < mazeWidth; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[i][j] === 1) {
                cell.classList.add('wall');
            }
            if (i === 1 && j === 1) {
                cell.classList.add('start');
            }
            if (i === mazeHeight - 2 && j === mazeWidth - 2) {
                cell.classList.add('end');
            }
            mazeElement.appendChild(cell);
        }
    }
}

renderMaze();
