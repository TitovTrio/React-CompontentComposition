import Styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
	<div className={Styles.header}>
		{isDraw
			? 'Ничья'
			: isGameEnded
				? `Победа: ${currentPlayer}`
				: `Ходит: ${currentPlayer}`}
	</div>
);

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

export { InformationLayout };
