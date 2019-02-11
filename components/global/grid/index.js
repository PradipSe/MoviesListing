import React from 'react'
import PropTypes from 'prop-types'

import GridComponent from './style'

const Grid = (props) => {
	const {
		largeColumns, mediumColumns, smallColumns, gap, mobileGap, children,
	} = props
	return (
		<GridComponent
			largeColumns={largeColumns}
			mediumColumns = {mediumColumns}
			smallColumns={smallColumns}
			gap={gap}
			mobileGap={mobileGap}
		>
			{children}
		</GridComponent>
	)
}

Grid.propTypes = {
	gap: PropTypes.string,
	mobileGap: PropTypes.string,
	largeColumns: PropTypes.string,
	mediumColumns: PropTypes.string,
	smallColumns: PropTypes.string,
	children: PropTypes.node.isRequired,
}

Grid.defaultProps = {
	gap: '0px',
	mobileGap: '0px',
	largeColumns: '12fr',
	mediumColumns: '12fr',
	smallColumns: '12fr',
}

export default Grid
