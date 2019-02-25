## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes is a react tool that is used to check the type of props coming into a component. It is important because js doesn't have any built in type checking. 
- [ ] Describe a life-cycle event in React?
    
    The react life cycle has three stages mounting, updating and unmounting. We can use functions to get the component to do things at these stages. (componentDidMount, componentDidUpdate and componentWillUnmount)

    The mounting stage and the unmounting stage only occur once during the componnents life cycle but the updating phase happens everytime the state of the component is updated.

- [ ] Explain the details of a Higher Order Component?

A HOC takes in a component as an argument and returns extra features built ontop of the component that was passed in

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
styled-components (library)
inline
linking a css file to the component