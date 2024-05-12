import "./topNav.css"
const TopNav = () => {
    return ( 
        <div className="nav-wrapper innerWidth">
            <a href="/">
                <h2 className="nav-header">InstaBlog</h2>
            </a>
            <div className="nav-item">
                <a href="/test" className="nav-link">Test</a>
                <a href="/newblog" className="nav-link">New Blog</a>
            </div>
        </div>
     );
}
 
export default TopNav;