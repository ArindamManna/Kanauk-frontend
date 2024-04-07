import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import BuilderLeftCard from "../components/Builder_Left_Card";
import BuilderRightCard from "../components/Builder_Right_Card";

const Builder = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({
        gallaery: false,
        articles: false,
    });
    return (
        <div>
            <Navbar />
            <div className="builder">
                <div className="left">
                    <div className="tags">
                        <div>Communities</div>
                        <div>Master planned communities</div>
                        <div>Reviews</div>
                    </div>
                    <div className="tagdetails">
                        <div className="name">Communities</div>
                        <div className="clickOutsideElem dropdown">
                            Gallery
                            <span
                                className="arrow"
                                onClick={() => {
                                    setIsSubMenuOpen((prev) => ({ ...prev, gallaery: !prev.gallaery }));
                                }}></span>
                            <div className={`nav-submenu ${isSubMenuOpen.gallaery ? "" : "hidden"}`}>
                                <ul>
                                    <li>Option 1</li>
                                    <li>Option 2</li>
                                </ul>
                            </div>
                            <button className="btn">Request Info</button>
                        </div>
                    </div>
                    <div className="cards">
                        <BuilderLeftCard />
                        <BuilderLeftCard />
                        <BuilderLeftCard />
                        <BuilderLeftCard />
                    </div>
                </div>
                <div className="right">
                    <div className="card">
                        <div className="title">
                            <div className="imgContainer">
                                <img src={require("../asset/images/builder/cardLogo.png")} alt="" />
                            </div>
                            <div className="text">By Pearl Valley Inc.</div>
                        </div>
                        <div className="subtitle">
                            <div className="text">Developer and Builder</div>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <div className="review-count">11 Reviews</div>
                        </div>
                        <button className="btn">Write a Review ★</button>
                        <div className="desc">
                            <div className="text">351 King Street East, Suite 1300, Toronto, Ontario, M5A 2W4, Canada</div>
                            <div className="number">416-449-1340</div>
                            <div className="site">Pearlvalley.com</div>
                        </div>
                    </div>
                    <div className="companynews">
                        <div className="title">Company News</div>
                        <div className="cards">
                            <BuilderRightCard />
                            <BuilderRightCard />
                            <BuilderRightCard />
                        </div>
                    </div>
                    <div className="readmore">
                        <button className="btn">Read More News</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;
