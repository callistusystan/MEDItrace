import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div style={{ margin: 'auto', display: 'flex' }}>
                <h2 style={{
                    fontSize: 24,
                    fontWeight: 700,
                    backgroundColor: '#FF5B5B',
                    padding: '2px 4px',
                    color: '#FFF', ...this.props.mediStyle
                }}>MEDI</h2>
                <p style={{
                    fontSize: 24,
                    padding: 2,
                    letterSpacing: 2,
                    textDecoration: 'underline', ...this.props.ocreStyle
                }}>ocre</p>
            </div>
        );
    }
}

export default Logo;
