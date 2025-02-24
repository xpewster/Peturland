// GameOfLife.js: adopted from: https://www.geeksforgeeks.org/conways-game-of-life-using-react/

import React, {
    useState,
    useCallback,
    useRef,
    useEffect
} from 'react';
import produce from 'immer';
import catagolue from '../../assets/catagolue.png';

const numRows = 12;
const numCols = 25;
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

const generateGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
    }
    rows[2][0] = 1;
    rows[2][1] = 1;
    rows[2][3] = 1;
    rows[2][6] = 1;
    rows[2][7] = 1;
    rows[3][1] = 1;
    rows[3][2] = 1;
    rows[3][5] = 1;
    rows[3][8] = 1;
    rows[4][5] = 1;
    rows[4][7] = 1;
    rows[5][6] = 1;
    rows[6][0] = 1;
    rows[7][0] = 1;
    rows[7][1] = 1;
    rows[7][2] = 1;
    rows[8][3] = 1;
    rows[9][2] = 1;
    rows[10][0] = 1;
    rows[10][1] = 1;
    return rows;
};

const Loafer = () => {
    const [grid, setGrid] = useState(() => {
        return generateGrid();
    });
    const [inputWhileRunning, setInputWhileRunning] = useState<number[]>([-1, -1]);
    const inputWhileRunningRef = useRef(inputWhileRunning);
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    const [running, setRunning] = useState(false);
    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid((g) => {
            return produce(g, (gridCopy) => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            let newI = i + x;
                            let newJ = j + y;
                            if (newI < 0) {
                                newI = numRows-1;
                            } else if (newI >= numRows) {
                                newI = 0;
                            }
                            if (newJ < 0) {
                                newJ = numCols-1;
                            } else if (newJ >= numCols) {
                                newJ = 0;
                            }
                            neighbors += g[newI][newJ];
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            });
        });
        setTimeout(runSimulation, 100);
    }, []);

    useEffect(() => {
        setRunning(!running);
        if (!running) {
            runningRef.current = true;
            runSimulation();
        }
    }, []);

    window.addEventListener("mousedown", (event) => {
        setMouseDown(true);
    });
    
    window.addEventListener("mouseup", () => {
        setMouseDown(false);
    });


    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 7px)`,
                    paddingTop: '10px',
                }}>
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            key={`${i}-${j}`}
                            onMouseEnter={(e) => {
                                if (mouseDown) {
                                    e.preventDefault();
                                    const newGrid = produce(grid,(gridCopy) => {
                                        gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                    });
                                    setGrid(newGrid);
                                }  
                            }}
                            onClick={() => {
                                const newGrid = produce(grid,(gridCopy) => {
                                    gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                });
                                setGrid(newGrid);
                            }}
                            style={{
                                width: 7,
                                height: 6,
                                backgroundColor:
                                    grid[i][j] ?
                                        'black' :
                                        undefined,
                                border: 'solid 1px lightgray',
                            }} />
                    ))
                )}
            </div>
            <a href='https://catagolue.hatsya.com/census/b3s23/C1/xq7' target="_blank" rel="noopener noreferrer">What's this?</a>
            <button
                style={{
                    float: 'right',
                    fontFamily: "ＭＳ Ｐゴシック",
                    fontSmooth: 'never',
                    fontSize: '12px',
                    WebkitFontSmoothing: 'none',
                }}
                onClick={() => {
                    setGrid(generateGrid());
                }}>
                Reset
            </button>
            <button
                style={{
                    float: 'right',
                    fontFamily: "ＭＳ Ｐゴシック",
                    fontSmooth: 'never',
                    WebkitFontSmoothing: 'none',
                    fontSize: '12px',
                    marginRight: '3px',
                }}
                onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runSimulation();
                    }
                }}
            >
                {running ? 'Stop' : 'Start'}
            </button>
        </>
    );
};

export default Loafer;
