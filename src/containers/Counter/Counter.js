import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onClickIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onClickDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onClickAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.onClickSubtraction}  />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ctr:state.counter
    }
}

const mapStatetoDispacth=dispatch=>{
    return{
        onClickIncrement:()=>dispatch({type:"INCREMENT"}),
        onClickDecrement:()=>dispatch({type:"DECREMENT"}),
        onClickSubtraction:()=>dispatch({type:"SUBTRACTION",value:5}),
        onClickAddition:()=>dispatch({type:"ADDITION",value:5})
    }
}

export default connect(mapStateToProps,mapStatetoDispacth)(Counter);