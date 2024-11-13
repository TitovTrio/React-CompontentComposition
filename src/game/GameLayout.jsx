import { Field } from './Field';
import { Information } from './Information';
import Styles from './GameLayout.module.css';
// import PropTypes from 'react';

export const GameLayout = (props) => {
	return (
		<div className={Styles.gameBlock}>
			<Information {...props} />
			<Field {...props} />
			<button onClick={() => props.startNewGame()}>Начать заново</button>
		</div>
	);
};

// GameLayout.propTypes = {
// 	keklol: PropTypes.string,
// };
