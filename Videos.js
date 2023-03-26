import React from "react";
import "./Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

function Videos() {
    return (
        <div className="videos">
            <Filter />
            <div className="row">
                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="React Full Course 2022"
                channel_name="Simplilearn"
                video_duration="5:33:29"
                />
            </div>
        </div>
    )
}
export default Videos