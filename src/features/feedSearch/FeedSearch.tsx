import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers, selectors } from './slice';
import { Container, Input, InputOnChangeData, Label } from 'semantic-ui-react';

function FeedSearch() {
    const selected = useAppSelector(selectors.selectFilter);
    const dispatch = useAppDispatch();
	return (
		<Input fluid icon='search' placeholder='Search in touits...' onChange={(_: any, data: InputOnChangeData) => dispatch(reducers.setFilter(data.value))} />
	)
}

export default FeedSearch;
