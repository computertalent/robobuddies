import React from 'react';

const Scroll = (props) => {
	return(
		<div style ={{overflowY: 'scroll', border: '1px solid_black', height: '900px'}}>
			{props.children}
		</div>

		) 
}

export default Scroll;