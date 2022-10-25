import React from 'react';
import { connect } from 'react-redux';
import { List, Segment } from 'semantic-ui-react';
import { selectors } from './slice';
import * as actions from './actions';
import TouitComponent from '../../features/touit/Touit';
import Touit from '../../models/touit.model';

interface IProps {
	retrieveTouits: any,
	touits: Touit[],
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
		if (touits.length === 0) return (
			<Segment>
				Nothing to see...
			</Segment>
		)
		return (
			<List>
				{touits.map((item, index) => <TouitComponent msg={item} key={index} />)}
			</List>
		)
	}
}

export default connect(mapStateToProps, actions)(FeedComponent);
