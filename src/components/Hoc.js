import { getThemeProps } from '@material-ui/styles';
import React from 'react';

const Hoc = (props) => {
    return (
        <div>
            <h1>Header</h1>
            { props.children }
        </div>
    );
};

export default Hoc;