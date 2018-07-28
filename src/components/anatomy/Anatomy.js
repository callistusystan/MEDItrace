import React from "react"
import layer0 from "../../images/layer0.png"
import layer1 from "../../images/layer1.png"
import layer2 from "../../images/layer2.png"
import layer3 from "../../images/layer3.png"
import layer4 from "../../images/layer4.png"
import layer5 from "../../images/layer5.png"
import layer6 from "../../images/layer6.png"
import {Slider} from 'antd';
import PainSpot from './PainSpot'

const layers = [layer0, layer1, layer2, layer3, layer4, layer5, layer6]
const layerNames = ['Skin', 'Muscles', 'Bones', 'Lungs', 'Stomach', 'Heart & Arteries', 'Nerves', 'All']

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect
}

class Anatomy extends React.Component {

    state = {
        layer: 1,
        painSpots: []
    }

    handleAddPainspot = e => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        const el = e.target
        const {x, y} = el.getBoundingClientRect();
        const displacementX = mouseX - x - 15
        const displacementY = mouseY - y - 15
        this.addPainspot(displacementX,displacementY,this.state.layer)

    }

    addPainspot = (x, y, layer) => {
        this.setState({
            ...this.state, painSpots:[...this.state.painSpots,{x,y,layer}]

        })
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
                    position:"relative"
                }}
            >
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
                     onClick={this.handleAddPainspot}>

                    {this.state.painSpots.map(painSpot=>{
                        const {x,y,layer} = painSpot
                        if(layer!==this.state.layer){
                            return null
                        }
                        return (
                            <PainSpot style={{position:"absolute",top:y,left:x}}/>
                        )
                    })}
                    {this.state.layer < 8 &&
                    <img style={{width: 217, height: 580}} src={layers[this.state.layer - 1]} alt=""/>}
                    {this.state.layer === 8 &&
                    <div style={{width: 217, height: 580, position: "relative"}}>
                        {layers.map(layer => {
                            return (
                                <img src={layer} style={{
                                    width: 217,
                                    height: 580,
                                    position: "absolute",
                                    opacity: 1 / 2,
                                    top: 0,
                                    right: 0
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