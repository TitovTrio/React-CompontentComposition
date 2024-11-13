import Styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ field, currentPlayer, setFieldState }) => (
	<div className={Styles.fieldsBlock}>
		{field.map((value, index) => (
			<button
				className={Styles.field}
				key={index}
				onClick={() => setFieldState(field, index, currentPlayer)}
			>
				{value}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	currentPlayer: PropTypes.string,
	setFieldState: PropTypes.func,
};

export { FieldLayout };
