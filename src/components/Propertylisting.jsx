import React, { useState } from "react";

const Propertylisting = () => {
    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    );
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({
        forsale: false,
        hometype: false,
        anyprice: false,
        beds: false,
        constatus: false,
        more: false,
    });
    return (
        <div className="property-listing">
            <div className="search">
                <div class="dropdown clickOutsideElem">
                    For Sale
                    <span>{arrow}</span>
                    <div class={`nav-submenu ${isSubMenuOpen.gallaery ? "" : "hidden"}`}>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propertylisting;
