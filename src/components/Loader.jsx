import React from "react";

function Loader() {
    return (
        <>
            <div className="fixed h-screen w-screen top-0 left-0 z-[999999] flex items-center justify-center loading-overlay">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 animate-spin text-[#03BFA1]"
                    viewBox="0 0 38 38"
                    stroke="currentColor"
                >
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="2">
                            <circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle>
                            <path d="M36 18c0-9.94-8.06-18-18-18"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </>
    );
}

export default Loader;
