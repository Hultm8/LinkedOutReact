import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>My Sidebar</h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <p>&copy; 2024 Your Company</p>
            </div>
        </div>
    );
};

export default Sidebar;
