import React from 'react'
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

interface MyToolTipProps {
    id: string;
}

const MyToolTip: React.FunctionComponent<MyToolTipProps> = ({id}) => {
    return (
        <>
            <Tooltip id={id} />
        </>
    )
}

export default MyToolTip