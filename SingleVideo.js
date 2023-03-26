import React from "react";

function SingleVideo({thumb_img, profile_img, title, channel_name, views, timestamps, video_duration }) {
    return(
        <div className="col-4">
            <div className="thumbnail_img relative">
                <img src ={thumb_img} alt="" 
                className="thumb-img pointer" 
                style={{"width": "100%"}}
                />
                <span className="videos_duration absolute">
                    {video_duration}
                </span>
            <div className="description_option d-flex">
                <div className="profile_img">
                    <img src={profile_img}
                    className="channel_image pointer"
                    />
                </div>
                <div className="title d-flex align-items-center justify-content-center">
                    <span className="channelname">
                        {channel_name}
                    </span>
                    <div className="time_description">
                        <span className="views">
                            {views}
                        </span>
                        <span className="timestamp">
                            {timestamps}
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SingleVideo