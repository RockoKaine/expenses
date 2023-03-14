import './Card.css';

//This is a custom wrapper component that we can use to wrap html
function Card (props){
    // this makes card the default class, and then we add any additional classNames via props. 
    const classes = 'card ' + props.className;
    //{props.children} helps us grab access to the children of this wrapper, this way the children css works.
    return <div className={classes}>{props.children}</div>
}

export default Card;