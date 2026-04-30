import {Heart, Instagram, Facebook, Link2Off} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <footer className = "bg-gray-900 text-white py-12">
            <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div className="col-span-2"> 
                       <div className="flex items-center mb-4">

                            <span className="ml-3 font-semibold text-lg">Aggies In Business</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Your journey to networking starts here. An HBCU Student led hub dedicated to excellence, empowerment, and community.
                        </p>
                        
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className ="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer"> 
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                        {/*Contact Inforamtion */}
                       
                    </div>
                    {/*Bottom Bar*/}
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row  justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Aggies in Business. All rights reserved.                        
                        </p>
                        <p className="tetxt-gray-400 text-sm flex items-center gap-2">
                        Made With <Heart size={16} className="text-pink-600"/> by Aggies in Business Team
                        </p>
                    </div>
                </div>
        </footer>
    );
}

export default Footer

