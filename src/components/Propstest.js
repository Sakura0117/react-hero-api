import React from 'react'

const Propstest = (props) => {
console.log(props)
    return (
        <div>
        <h1>
            hello world {props.name} a.k.a {props.heroName}
        </h1>
        { props.children }
        </div>
    )
}

export default Propstest;