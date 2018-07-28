import React from 'react';
import './scrollview.css';

const ScrollView = props => (
    <div
        className={`scroll--simple ${props.isDark ? 'dark' : ''}`}
        style={{ flex: 1, width: '100%', height: '100%', padding: '8px 16px', ...props.style }}
    >
        {props.children}
    </div>
);

export default ScrollView;