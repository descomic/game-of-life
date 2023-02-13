import { useEffect, useState } from "react";
import { Button } from "react-native";
import Cell from "./Cell"
import { getRandomArray, nextStep } from "./Game";

export default function GameOfLife() {
    const DEFAULT_SIZE = 30
    const [grid, setGrid] = useState(getRandomArray(DEFAULT_SIZE));
    const [timeSpan, setTimeSpan] = useState(1000);
    useEffect(() => {
        const timeoutId = setTimeout(
            () => {
                setGrid(nextStep(grid));
            },
            timeSpan);

        return () => clearTimeout(timeoutId);
    });

    return (
        <div>
            <table>
                <tbody>
                    {
                        grid.map(row =>
                            <tr key={Math.random()}>{
                                row.map(cell => <Cell key={Math.random()} activated={cell} />)
                            }</tr>)
                    }
                </tbody>
            </table>
            <Button title="Restart" onPress={() => setGrid(getRandomArray(DEFAULT_SIZE))}></Button>
        </div>
    );
}
