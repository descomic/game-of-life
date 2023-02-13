export function getRandomArray(size: number): boolean[][] {
    const range = [...Array(size).keys()]
    return range.map(_ => range.map(_ => Math.random() < 0.5))
}

export function nextStep(grid: boolean[][]) {
    const numberOfNeighbours = getNumberOfNeighBours(grid)
    const result = grid.map(row => row.map(_ => false));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const neighbours = numberOfNeighbours[i][j]
            if (grid[i][j]) {
                if (neighbours >= 2 && neighbours <= 4) {
                    result[i][j] = true
                }
            } else if (neighbours === 3) {
                result[i][j] = true
            }
        }
    }
    return result;
}

function getNumberOfNeighBours(grid: boolean[][]): number[][] {
    const result = grid.map(row => row.map(_ => 0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let neighbours = 0;

            if (grid[(grid.length + i - 1) % grid.length][j]) {
                neighbours++;
            }
            if (grid[i][(grid[1].length + j - 1) % (grid[1].length)]) {
                neighbours++;
            }
            if (grid[(i + 1) % grid.length][j]) {
                neighbours++;
            }
            if (grid[i][(j + 1) % (grid[1].length)]) {
                neighbours++;
            }

            result[i][j] = neighbours;
        }
    }
    return result;
}