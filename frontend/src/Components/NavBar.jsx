import {useAuth} from "../auth/AuthContext";
import {Link, NavLink} from "react-router-dom";

const activeLink = "px-3 py-2 rounded-lg transition transform hover:-translate-y-[-1px] hover:bg-white/15";
export default function NavBar({onLoginClick}) {
    const {user, setUser} = useAuth();

    const handleLogout = async () => {
        setUser(null);
    };

    return (
        <>
            <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-[rgba(11,16,32,0.65)] backdrop-blur-md">
                <div className="max-w-6xl mx-auto flex items-center justify-end px-10 py-4">

                    <nav className="flex items-center gap-6">
                        <NavLink to="/" 
                        className={({isActive}) => 
                            `${activeLink} ${isActive ? "bg-yellow-300 text-black font-semibold" : "text-yellow-200/80 hover:text-white"}`}>
                                Home
                        </NavLink>
                        <NavLink to="/team" 
                        className={({isActive}) => 
                            `${activeLink} ${isActive ? "bg-yellow-300 text-black font-semibold" : "text-yellow-200/80 hover:text-white"}`}>
                                Team
                        </NavLink>
                        {/* Conditional Login/logout button */}
                        {!user ? (
                            <button onClick={onLoginClick} 
                            className="px-3 py-2 rounded-lg text-yellow-200/80 hover:text-white transition transform hover:-translate-y-[-1px] hover:bg-white/15 cursor-pointer">
                                Login
                            </button>
                        ) : (
                            <button onClick={handleLogout} 
                            className="px-3 py-2 rounded-lg text-yellow-200/80 hover:text-white transition transform hover:-translate-y-[-1px] hover:bg-white/15 cursor-pointer">
                                Logout
                            </button>
                        )}
                    </nav>
                </div> 
            </header> 
        </>
    )
} 