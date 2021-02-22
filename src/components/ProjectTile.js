import React from 'react'

import { Link, Router } from 'components/Router'

export default (props) => {
    const backgroundcolor = (props.bg_color ? props.bg_color : '#638475')
    const style = {
        "background": (props.bg ? ('url('+props.bg+'), no-repeat, '+backgroundcolor) : backgroundcolor),
        "background-size": 'cover',
    }
    const project_tile = (
        <div className="project-tile" style={style}>
            <h1>{ props.title }</h1>
            <div></div>
            <p>{ props.description }</p>
        </div>
    )
    if (props.to) {
        return (
            <Link to={props.to}>
                {project_tile}
            </Link>
        )
    }else {
        return project_tile;
    }
}
