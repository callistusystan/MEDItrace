import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div style={{ margin: 'auto', display: 'flex' }}>
                <span style={{
                    fontSize: 24,
                    fontWeight: 700,
                    backgroundColor: '#FF5B5B',
                    padding: '2px 4px',
                    color: '#FFF', ...this.props.mediStyle
                }}>MEDI</span>
                <span style={{
                    fontSize: 24,
                    padding: 2,
                    letterSpacing: 2,
                    textDecoration: 'underline', ...this.props.ocreStyle
                }}>ocre</span>
            </div>
        );
    }
}

export default Logo;
