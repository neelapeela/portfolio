

const Navbar = ({gamesref, workref, projectsref}) =>{
    const scrollToGames = () => {gamesref.current.scrollIntoView()}
    const scrollToProjects = () => {projectsref.current.scrollIntoView()}
    const scrollToWork = () => {workref.current.scrollIntoView()}

    return(
        <div className="navbar">
        <button onClick={scrollToGames}>Games</button>
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToWork}>Work</button>
        </div>
    )
}

export default Navbar;