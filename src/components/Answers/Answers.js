import './Answers.css'

import React from 'react';

const Answers = () => {
    return (
        <div className='writing'>
            <h1 className='header'> Questions and Answers</h1>
            <h2>1. How does React works?</h2>
            <p><span>Answers:</span> React is a frameWork of JavaScript which helps to build user interfaces. It very effective tools to make single page applications and mobile supported apps.React can build complex apps in very effectively using declarative code.
                <br /><br />
            React application is made with multiple components. the component renders a small, reusable HTML. the components are nested in other components to operate complex application to be built very easily. <br /><br />
            React generale a virtual DOM which is basically a DOM tree representation in Js.it uses the virtual representation when it needs to read or write to the DOM. then Virtual DOM tries updata the browser's DOM very efficiently as possible. 
            unlike borwser's DOM elements,React elements are plain objects and very easy to create. React virtual DOM update DOM to match the react element. this is the reason, JS is very fast to update the DOM elements and speed up its manipulation. 
            <br/> <br/>       
            <h2>2. What is the different between props and state?</h2>
            
            <h4>Answer: there are some difference between props and state as below:</h4>
            <span>Immutable/Mutable:</span> <br/>
            props can't be modified or changed. it only can show the data to UI. on the other hand state is mutable. Here data can be changed. <br/>
            <span>Passing data between components: </span>
            <br />
            props is used for passing data from one component to other component. In case of state, data is passed within the component.
            <br/>
            <span>Use Case:</span>
            <br />
            In state and functional component, props can be used. but state can be used class component and state components.
            <br />
            <span>Purpose:</span> <br/>
            props are generally used only read only purpose. on the other hand, state is for read and write purpose.  
            <br/>
            <span>In case of updating:</span>
            <br />  
            props determine the vie upon its creation. but with object the state can be updated. 
            <br/>
            <span>Performance:</span> <br />
            in case of performance, props gives better performances than state.            
           </p>
        </div>
    );
};

export default Answers;