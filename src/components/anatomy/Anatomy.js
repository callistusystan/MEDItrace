import React from "react"
import layer0 from "../../images/layer0.png"
import layer1 from "../../images/layer1.png"
import layer2 from "../../images/layer2.png"
import layer3 from "../../images/layer3.png"
import layer4 from "../../images/layer4.png"
import layer5 from "../../images/layer5.png"
import layer6 from "../../images/layer6.png"
import 'antd/dist/antd.css'
import '../../fonts/fonts.css'
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

    state = {
        layer: 1,
        painSpots: [],
    }

    handleAddPainspot = e => {
        e.preventDefault()
        const ctx = this.canvas.getContext("2d");
        const mouseX = e.clientX
        const mouseY = e.clientY
        const el = e.target
        const {x, y} = el.getBoundingClientRect();
        const displacementX = mouseX - x
        const displacementY = mouseY - y
        const pixels = Array.from(ctx.getImageData(displacementX-15,displacementY-15,15,15).data)
        if(!arrayAllZero(pixels)) {
            this.addPainspot(displacementX - 15, displacementY - 15, this.state.layer)
        }
    }

    addPainspot = (x, y, layer) => {
        this.setState({
            ...this.state,
            painSpots: [...this.state.painSpots, {x, y, layer}],

        })
    }

    componentDidMount(){
        const img = new Image();
        const ctx = this.canvas.getContext("2d");
        img.onload = () => {
            ctx.drawImage(img,0,0)
        };
        img.src = layer0
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
                    position: "relative"
                }}
            >
                <canvas ref={canvas=>this.canvas = canvas} height={580} width={217} style={{display:"none"}}/>
                <Slider
                    dots
                    vertical
                    min={1}
                    max={8}
                    default={8}
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        height: 200
                    }}
                    onChange={layer => {
                        this.setState({layer: layer})
                    }}
                />
                <h1>{layerNames[this.state.layer - 1]}</h1>
                <div style={{width: 217, height: 580, position: "relative", display: "flex", justifyContent: "center"}}
                     onClick={this.handleAddPainspot} onDoubleClick={e => e.preventDefault()}>

                    {this.state.painSpots.map(painSpot => {
                        const {x, y, layer} = painSpot
                        if (layer !== this.state.layer && this.state.layer !== 8) {
                            return null
                        }
                        return (
                            <PainSpot key={`${x}${y}${layer}`} style={{position: "absolute", top: y, left: x}}/>
                        )
                    })}
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

                </div>
            </div>

        )
    }
}

export default Anatomy