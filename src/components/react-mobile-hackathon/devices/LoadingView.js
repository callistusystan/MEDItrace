import React from 'react';

const LoadingView = props => (
    <div
        style={{
            flex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', ...props.style
        }}
    >
        {props.children}
    </div>
);

export default LoadingView;