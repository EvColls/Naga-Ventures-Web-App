import '../styles/Header.css';
import { IoMdNotifications, IoMdSearch  } from "react-icons/io";


function Header(props) {
    return (
        <div>
            <header>
                <div className="header-title">
                    <span className='header-text'>{props.title}</span>
                </div>

                <div className="header-actions">
                    <div className="search">
                        <input type="text" placeholder='Search here'/>
                        <IoMdSearch className="search-icon" size={20} />
                    </div>
                    <div className="notification"><IoMdNotifications size={28} /></div>
                    <div className="profile">
                        <div className="profile-text">
                            <span className='username-text'>Rayven Clores</span>
                            <span className='position-text'>Manager</span>
                        </div>
                        <img className='profilePicture' src="https://lh3.googleusercontent.com/a/ACg8ocIfs2fcU7ptTUan2O1sK3z_tPkdOzeQuQiMMyJtSQJhOQ7LwQpq=s288-c-no" alt="" /></div>
                </div>
            </header>
        </div>
    );
}

export default Header;