import "./topNav.css"
const TopNav = () => {
    return ( 
        <div>
            <div className="topNav">
                <h2 className="title">ReactMusic</h2>
                <div className="items">
                    <a href="/search"> Search</a>
                    <a href="/create">Create Account</a>
                </div>
            </div>
        </div>
     );
}
 
export default TopNav;