import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(new Array(9).fill(''));

	const setFieldState = (field, index, currentPlayer) => {
		if (!field[index] && !isGameEnded && !isDraw) {
			const newField = field.map((fieldValue, fieldIndex) =>
				fieldIndex === index ? (fieldValue = currentPlayer) : fieldValue,
			);

			if (checkVictory(newField)) {
				setIsGameEnded(true);
				setField(newField);
			} else if (checkDraw(newField)) {
				setIsDraw(true);
				setField(newField);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
				setField(newField);
			}
		}
	};

	const checkVictory = (a) => {
		const victoryCases = [
			a[String(0)] + a[String(1)] + a[String(2)],
			a[String(3)] + a[String(4)] + a[String(5)],
			a[String(6)] + a[String(7)] + a[String(8)],
			a[String(0)] + a[String(3)] + a[String(6)],
			a[String(1)] + a[String(4)] + a[String(7)],
			a[String(2)] + a[String(5)] + a[String(8)],
			a[String(0)] + a[String(4)] + a[String(8)],
			a[String(2)] + a[String(4)] + a[String(6)],
		];

		return victoryCases.includes('XXX') || victoryCases.includes('000');
	};

	const checkDraw = (a) => {
		return a.every((value) => value === 'X' || value === '0');
	};

	const startNewGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(new Array(9).fill(''));
	};

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setFieldState={setFieldState}
			startNewGame={startNewGame}
		/>
	);
};
