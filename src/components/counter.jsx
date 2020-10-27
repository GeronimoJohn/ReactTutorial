import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', ' tag2', 'tag3']
    };

    render() { 
        // when you're calling something out of the render dont for get to add the ()
        return <div>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>;
    }

}
 
export default Counter;