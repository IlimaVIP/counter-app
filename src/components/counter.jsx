import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            // Ajax call to get data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }
    render() { 
        console.log('Counter', this.props);
        return (
           <div>
               <img src="https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4217dd257e2020fa0fd82af67a35e4ad&auto=format&fit=crop&w=2526&q=80" 
               alt="Clothes" class="img-thumbnail" width="500"></img><br />
               <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
               <button className="btn btn-secondary btn-sm" onClick={ () => this.props.onIncrement(this.props.counter)}>Increment</button>
               <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;