import React, { Component } from 'react';

import { SymptomsBottomSection } from './SymptomsBottomSection';
import { MyRater } from './MyRater';
import { FormContent } from './FormContent';

import 
    Fade
 from '@material-ui/core/Fade';
import {
    withStyles} from '@material-ui/core/styles';

const RatingControl = ({ id, children, rating, onRate, ...other }) => (
    <div>
        <h3 style={{ color: '#555', fontWeight: 300, marginTop: 16, marginBottom: 16 }}>{children}</h3>
        <MyRater id={id} rating={rating} onRate={onRate}/>
    </div>
);

export const SymptomsRatingForm = withStyles({
    bottomSection: {
        display: 'flex'
    }
})(class extends Component {
    constructor() {
        super();
        this.state = {
            pain: 0,
            itchiness: 0,
            swelling: 0
        };
    }

    onRatePain = ({ rating: pain }) => {
        console.log('pain', pain);
        this.setState({
            pain,
        });
    };

    onRateItchiness = ({ rating: itchiness }) => {
        this.setState({
            itchiness
        });
    };

    onRateSwelling = ({ rating: swelling }) => {
        this.setState({
            swelling
        });
    };

    onNext = () => {
        this.props.onNext(this.state);
    };

    render() {
        return (
            <form>
                <FormContent title="Symptoms">
                    <Fade in timeout={400}>
                        <div>
                        <RatingControl rating={this.state.pain} onRate={this.onRatePain}>Pain</RatingControl>
                        </div>
                    </Fade>
                    <Fade in timeout={600}>
                        <div>
                        <RatingControl rating={this.state.itchiness}
                                       onRate={this.onRateItchiness}>Itchiness</RatingControl>
                        </div>
                    </Fade>

                    <Fade in timeout={800}>
                        <div>
                        <RatingControl rating={this.state.swelling}
                                       onRate={this.onRateSwelling}>Swelling</RatingControl>
                        </div>
                    </Fade>
                    <Fade in timeout={1000}>
                        <div>
                        <SymptomsBottomSection onNext={this.onNext}/>
                        </div>
                    </Fade>

                </FormContent>
            </form>
        );
    }
});