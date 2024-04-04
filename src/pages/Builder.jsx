import React from "react";
import Navbar from "../components/Navbar";

const Builder = () => {
    return (
        <div>
            <Navbar />
            <div className="builder">
                <div className="builder_left">
                    <div className="builder_left_tags">
                        <div>Communities</div>
                        <div>Master planned communities</div>
                        <div>Reviews</div>
                    </div>
                    <div className="builder_left_tagdetails">
                        <div className="builder_left_tagdetails_name">Communities</div>
                        <div className="builder_left_tagdetails_dropdown">
                            <label for="dropdown">All location (12)</label>
                            <select id="dropdown">
                                <option value="">Option1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                            <button className="builder_left_tagdetails_dropdown_btn">Request Info</button>
                        </div>
                    </div>
                    <div className="builder_left_cards">
                        <div className="builder_left_cards_item"></div>
                    </div>
                </div>
                <div className="builder_right">
                    <div className="builder_right_card"></div>
                    <div className="builder_right_companynews">
                        <div className="builder_right_companynews_details"></div>
                    </div>
                    <div className="builder_right_readmore">
                        <button className="builder_right_readmore_btn">Read More News</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;
