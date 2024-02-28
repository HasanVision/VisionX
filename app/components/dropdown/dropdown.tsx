"use client"
import React, { useState } from 'react';

interface DropdownMenuProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
}

export const  DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-menu">
            <button onClick={toggleMenu}>{trigger}</button>
            {isOpen && (
                <div className="dropdown-content">
                    {children}
                </div>
            )}
        </div>
    );
};


