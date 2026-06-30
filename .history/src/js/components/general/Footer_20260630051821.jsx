imp
export default function Footer(){
    return(
        <div className="container">
        <div className="internal-links">
            <nav>
                        <ul>
                            <Link className='link active' to={"/"} > home</Link>
                            <Link className='link'  to={"/about"} > about</Link>
                            <Link  className='link' to={"/accessories"} > accessories</Link>
                            <Link className='link'  to={"/blog"} > Blog</Link>
                            <Link  className='link' to={"/contact"} > contact</Link>
                        </ul>
                        <div className="auth-btns">
                            <Link className='button' to={"/signin"} ><button><FontAwesomeIcon icon={faRightToBracket} /></button></Link>
                            <Link className='button' to={"/signin"} ><button><FontAwesomeIcon icon={faUser} /></button></Link>
                            
                            
                        </div>
                    </nav>
        </div>
        </div>
    )
}