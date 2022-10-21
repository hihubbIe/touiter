import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { List } from 'semantic-ui-react';
import Touit from '../../features/touit/Touit';
import { selectors } from './feedSlice';

function FeedComponent() {
    const messages = useAppSelector(selectors.selectTouits);
	return (
		<List>
			{messages.map(item => <Touit msg={item} />)}
		</List>
	)
}

export default FeedComponent;
