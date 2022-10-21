import React from 'react';
import { List } from 'semantic-ui-react';
import { selectors } from '../../features/feed/feedSlice';
import { retrieveTouits } from './touits';
import { connect } from 'react-redux';
import Touit from '../../features/touit/Touit';

interface IProps {
	retrieveTouits: any,
	touits: any[],
}

const mapStateToProps = (state: any) => {
	return {
		touits: selectors.selectTouits(state),
	}
};

class FeedComponent extends React.Component<IProps> {
	
	componentDidMount(): void {
		this.props.retrieveTouits();
	}

	render() {
		const { touits } = this.props;
		return (
			<List>
				{touits.map((item, index) => <Touit msg={item} key={index} />)}
			</List>
		)
	}
}

export default connect(mapStateToProps, { retrieveTouits })(FeedComponent);
