import React from 'react';
import { Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../app/hooks';
import Feed from '../../features/feed/Feed';
import { selectors as menuSelector } from '../menu/slice';

function ContentComponent() {
    const contentSelected = useAppSelector(menuSelector.selectCount);
    switch (contentSelected) {
        case 0: return <Feed />
        case 1:
        case 2:
        default: return <Segment>Not implement yet</Segment>
    }
}

export default ContentComponent;
