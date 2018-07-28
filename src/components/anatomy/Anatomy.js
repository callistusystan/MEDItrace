import React from "react"
import layer0 from "../../images/layer_0.png"
import layer1 from "../../images/layer_1.png"
import layer2 from "../../images/layer_2.png"
import layer3 from "../../images/layer_3.png"
import layer4 from "../../images/layer_4.png"
import layer5 from "../../images/layer_5.png"
import layer6 from "../../images/layer_6.png"
import {Slider} from 'antd';
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
}
class Anatomy extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            layer: 1,
            time : new Date().getMinutes(),
            painSpots: [],
        }
    };

    handleAddPainspot = e => {
        e.preventDefault()
        const ctx = this.canvas.getContext("2d");
        const mouseX = e.clientX
        const mouseY = e.clientY
        const el = e.target
        const {x, y} = el.getBoundingClientRect();
        const displacementX = mouseX - x
        const displacementY = mouseY - y
        const pixels = Array.from(ctx.getImageData(displacementX,displacementY,3,3).data)
        if(!arrayAllZero(pixels)) {
            this.addPainspot(displacementX - 15, displacementY - 15, this.state.layer)
        }
    }

    addPainspot = (x, y, layer) => {
        const currentDate = new Date().getMinutes()
        this.setState({
            ...this.state,
            painSpots: [...this.state.painSpots, {x, y, layer,currentDate }],

        })
    }

    componentDidMount(){
        const img = new Image(217,580);
        const canvas = this.canvas
        const ctx = canvas.getContext("2d");
        img.src = layer0
        img.onload = () => {
            ctx.drawImage(img, 0, 0, img.width,    img.height)
        };

    }

    render() {
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
                <canvas ref={canvas=>this.canvas = canvas} width={217} height={580} style={{display:"none"}}/>
                <Slider
                    dots
                    vertical
                    min={1}
                    max={8}
                    default={8}
                    style={{
                        position: "absolute",
                        top: this.props.timelime? 120 : 147,
                        right: 10,
                        height: 200
                    }}
                    onChange={layer => {
                        this.setState({layer: layer})
                    }}

                />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>{layerNames[this.state.layer - 1]}</h3>
                    {this.props.timeline}
                </div>
                <div style={{width: 217, height: 580, position: "relative", display: "flex", justifyContent: "center", marginTop: 8 }}
                     onClick={this.props.clickable && this.handleAddPainspot} onDoubleClick={e => e.preventDefault()}>


                    {this.state.layer < 8 &&
                    <img onDoubleClick={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
                         style={{width: 217, height: 580, userSelect: 'none'}} src={layers[this.state.layer - 1]}
                         alt=""/>}
                    {this.state.layer === 8 &&
                    <div style={{width: 217, height: 580, position: "relative"}}>
                        {layers.map((layer, i) => {
                            return (
                                <img
                                    key={i}
                                    onDragStart={e => e.preventDefault()}
                                    onDoubleClick={e => e.preventDefault()}
                                    src={layer} style={{
                                    width: 217,
                                    height: 580,
                                    position: "absolute",
                                    opacity: 1 / 2,
                                    top: 0,
                                    right: 0,
                                    userSelect: 'none'
                                }} alt=""/>
                            )
                        })}
                    </div>}
                    {this.state.painSpots.map(painSpot => {
                        const {x, y, layer} = painSpot
                        if (layer !== this.state.layer && this.state.layer !== 8) {
                            return null
                        }
                        return (
                            <PainSpot
                                key={`${x}${y}${layer}`}
                                style={{position: "absolute", top: y, left: x,zIndex:1}}
                                onClick={e=>{
                                    console.log(e)
                                    e.stopPropagation()

                                }}
                            />
                        )
                    })}

                </div>
            </div>

        )
    }
}

export default Anatomy