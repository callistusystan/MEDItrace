import _ from 'lodash';
import React from "react"
import layer0 from "../../images/layer_0.png"
import layer1 from "../../images/layer_1.png"
import layer2 from "../../images/layer_2.png"
import layer3 from "../../images/layer_3.png"
import layer4 from "../../images/layer_4.png"
import layer5 from "../../images/layer_5.png"
import layer6 from "../../images/layer_6.png"
import { Tooltip, Slider} from 'antd';
import PainSpot from './PainSpot'

const layers = [layer0, layer1, layer2, layer3, layer4, layer5, layer6]
const layerNames = ['Skin', 'Muscles', 'Bones', 'Lungs', 'Stomach', 'Heart & Arteries', 'Nerves', 'All']
const arrayAllZero = array => {
    for(let i = 0; i < array.length; i ++){
        if(array[i]!==0){
            return false
        }
    }
    return true
};

const MONTH = 'Jul';

const bodyHeight = window.innerHeight * 0.55
const bodyWidth = 217/580 * bodyHeight


class Anatomy extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            layer: 1,
            time : new Date().getMinutes(),
            painSpots: this.props.painSpots || { Jul: [] }
        }
    };

    handleAddPainspot = e => {
        e.preventDefault()
        const ctx = this.canvas.getContext("2d");
        const mouseX = e.clientX
        const mouseY = e.clientY
        const el = e.target
        const {x, y} = el.getBoundingClientRect();
        const displacementX = (mouseX - x)/bodyWidth
        const displacementY = (mouseY - y)/bodyHeight
        const pixels = Array.from(ctx.getImageData(displacementX*bodyWidth,displacementY*bodyHeight,3,3).data)
        if(!arrayAllZero(pixels)) {
            this.addPainspot(displacementX , displacementY, this.state.layer)
        }
    }

    addPainspot = (x, y, layer) => {
        const currentDate = new Date().getMinutes();
        this.setState({
            ...this.state,
            painSpots: {
                ...this.state.painSpots,
                Jul: [ ...this.state.painSpots.Jul, { x: x, y: y, layer, currentDate } ],
            }
        });

        setTimeout(() => {
            console.log(this.props.history);
            this.props.history.push({
                pathname: '/symptoms',
                state: { x, y, layer }
            })
        }, 1000)
    };

    componentDidMount(){
        const img = new Image(bodyWidth,bodyHeight);
        const canvas = this.canvas
        const ctx = canvas.getContext("2d");
        img.src = layer0
        img.onload = () => {
            ctx.drawImage(img, 0, 0, img.width,    img.height)
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.painSpots !== this.state.painSpots) {
            this.setState({ painSpots: nextProps.painSpots });
        }
    }

    render() {
        console.log(this.state.painSpots);
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    fontFamily: "GlacialIndifference",
                    position: "relative",
                    ...this.props.style
                }}
            >
                <canvas ref={canvas=>this.canvas = canvas} width={bodyWidth} height={bodyHeight} style={{display:"none"}}/>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 style={{ color: '#555', fontWeight: 300, marginTop: 16 }}>{layerNames[this.state.layer - 1]}</h3>
                    {this.props.timeline}
                </div>
                <div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 16 }}>

                    <Slider
                        dots
                        vertical
                        min={1}
                        max={8}
                        default={8}
                        style={{
                            position: "absolute",
                            top: 100,
                            right: 10,
                            height: 200
                        }}
                        onChange={layer => {
                            this.setState({layer: layer})
                        }}

                    />
                    <div style={{width: bodyWidth, height: bodyHeight, position: "relative", display: "flex", justifyContent: "center", marginTop: 8 }}
                         onClick={this.props.clickable && this.handleAddPainspot} onDoubleClick={e => e.preventDefault()}>


                        {this.state.layer < 8 &&
                        <img onDoubleClick={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
                             style={{width: bodyWidth, height: bodyHeight, userSelect: 'none'}} src={layers[this.state.layer - 1]}
                             alt=""/>}
                        {this.state.layer === 8 &&
                        <div style={{width: bodyWidth, height: bodyHeight, position: "relative"}}>
                            {layers.map((layer, i) => {
                                return (
                                    <img
                                        key={i}
                                        onDragStart={e => e.preventDefault()}
                                        onDoubleClick={e => e.preventDefault()}
                                        src={layer} style={{
                                        width: bodyWidth,
                                        height: bodyHeight,
                                        position: "absolute",
                                        opacity: 1 / 2,
                                        top: 0,
                                        right: 0,
                                        userSelect: 'none'
                                    }} alt=""/>
                                )
                            })}
                        </div>}
                        {_.map(this.state.painSpots[this.props.month || MONTH], painSpot => {
                            const {x, y, layer} = painSpot
                            if (layer !== this.state.layer && this.state.layer !== 8) {
                                return null
                            }
                            const actualDisplacementX = x*bodyWidth - 15
                            const actualDisplacementY = y*bodyHeight - 15
                            return (
                                <Tooltip title={painSpot.note || 'asdf'} text
                                         style={{position: "absolute", top: actualDisplacementY, left: actualDisplacementX,zIndex:1}}>
                                    <PainSpot
                                        title={painSpot.note}
                                        key={`${x}${y}${layer}`}
                                        x={x}
                                        style={{position: "absolute", top: actualDisplacementY, left: actualDisplacementX,zIndex:1}}
                                        onClick={e=>{
                                            console.log(e)
                                            e.stopPropagation()
                                        }}
                                    />
                                </Tooltip>
                            )
                        })}

                    </div>
                </div>
            </div>

        )
    }
}

export default Anatomy