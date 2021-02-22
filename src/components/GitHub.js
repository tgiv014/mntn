import React from 'react'

import { Link, Router } from 'components/Router'

export default (props) => {
    const backgroundcolor = (props.bg_color ? props.bg_color : '#638475')
    let repos = Array.isArray(props.repos) ? props.repos : [props.repos]

    const github_tile = (
        <div className="github-tile">
            <div>
                <img src="/GitHub-Mark-120px-plus.png"></img>
            </div>
            <div>
                <p>GitHub Repos:</p>
                <ul>
                {repos.map(repo => {
                    const clean_name = repo.replace("https://", "").replace("www.", "").split(/\/(.+)/)[1]
                    return (
                        <li key={repo}>
                            <a href={repo}>{clean_name}</a>
                        </li>
                    )
                }
                )}
                </ul>
            </div>
        </div>
    )
    return github_tile
}
