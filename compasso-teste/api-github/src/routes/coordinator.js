export const goToSearch = (history) => {
    history.push('/')
}

export const goToRepos = (history, user) => {
    history.push(`${user}/repos`)
}

export const goToStarred = (history, user) => {
    history.push(`${user}/starred`)
}

export const goToDetail = (history, user) => {
    history.push(`${user}`)
}