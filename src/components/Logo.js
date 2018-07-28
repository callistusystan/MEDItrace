import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div style={{ margin: 'auto', display: 'flex', ...this.props.style }}>
                <span style={{
                    fontSize: 24,
                    fontWeight: 700,
                    backgroundColor: '#FF5B5B',
                    padding: '0.1em 0.25em',
                    color: '#FFF', ...this.props.mediStyle
                }}>MEDI</span>
                <span style={{
                    fontSize: 24,
                    padding: '0.1em 0 0.1em 0.25em',
                    letterSpacing: 2,
                    ...this.props.traceStyle
                }}>trace</span>
            </div>
        );
    }
}

export default Logo;
