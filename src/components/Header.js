import Logo from '../img/Logo.jpg'

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="right-menu">
                    {/*<img src={Logo} alt='Logo'/>*/}
                    <a href='/'>CSUP BLOG</a>
                </div>
                <div className="left-menu">
                    <a href="/">Home</a>
                    <a href="/create" className="button-container">Add Post</a>
                </div>
            </div>  
        </header>
    );
}

export default Header
