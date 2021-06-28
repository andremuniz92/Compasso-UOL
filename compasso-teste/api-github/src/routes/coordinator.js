export const goToSearch = (history) => {
    history.push('/')
}

export const goToRepos = (history, user) => {
    history.push(`/user/${user}/repos`)
}

export const goToStarred = (history, user) => {
    history.push(`/user/${user}/starred`)
}