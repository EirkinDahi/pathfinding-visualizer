import React,{Component} from "react";
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component{
    constructor(props){
        super(props);
        this.state={
            nodes: []
        };
    }

    componentDidMount(){
        const nodes  =[];
        for(let row = 0; row< 20; row++){
            const currRow = [];
            for(let col  = 0;col<50;col++){
                const currNode = {
                    col,
                    row,
                    isStart: row == 10 && col ==5,
                    isFinish: row == 10 && col ==45
                };
                currRow.push(currNode);
            }
            nodes.push(currRow);

        }
        this.setState({nodes});
    }

    render(){
        const {nodes}  = this.state;
        console.log({nodes});

        return(
            <div className = "grid">
                {nodes.map((row,rowIndx) =>{
                    return(
                        <div key ={rowIndx}>
                            {row.map((node,nodeIdx)=>{
                            const{isStart,isFinish}= node;
                            return(
                                <Node
                                    key = {nodeIdx}
                                    isStart  = {isStart}
                                    isFinish = {isFinish}
                                    test = {'foo'}
                                    test = {'kappa'}></Node>
                            );
                        })}
                    </div>
                    );
                })}
            </div>
        );
    }
}