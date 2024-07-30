import React from 'react';
import './Events.css';
import image from './assets/dg.jpg';

const Events = () => {
    return (
        <div className="events-container">
            <h1>Our Events</h1>
            <p>Stay updated with our upcoming events and activities.</p>
            
            <div className="event">
                <img src="https://www.ashevillechamber.org/wp-content/uploads/2019/02/AnnualMeeting2018_RyanBumgarner_163_marquee.jpg" alt="Annual Corporate Meeting" className="event-image" />
                <div className="event-description">
                    <h2>Annual Corporate Meeting</h2>
                    <p>Join us for our annual corporate meeting where we discuss the progress and future plans of our company.</p>
                </div>
            </div>
            
            <div className="event event-reverse">
                <img src="https://imgcdn.unilumin.com/media/upload/case/20201022/Compress_5.jpg" alt="Product Launch" className="event-image" />
                <div className="event-description">
                    <h2>Product Launch</h2>
                    <p>We are excited to introduce our new product line. Be the first to experience our latest innovations.</p>
                </div>
            </div>
            
            <div className="event">
                <img src={image} alt="Workshop on Innovation" width={450} style={{borderRadius:'10px'}}/>
                <div className="event-description">
                    <h2>Workshop on Innovation</h2>
                    <p>Participate in our workshop focused on fostering innovation and creativity within the workplace.</p>
                </div>
            </div>
            
            <div className="event event-reverse">
                <img src="https://www.astarexperience.com/wp-content/uploads/2023/06/decorated-wedding-hall-with-candles-round-tables-centerpieces-1024x0-c-center.jpg" alt="Charity Gala" className="event-image" />
                <div className="event-description">
                    <h2>Charity Gala</h2>
                    <p>Join us for an evening of elegance and charity as we raise funds for a noble cause.</p>
                </div>
            </div>
            
            <div className="event">
                <img src="https://d2w1le1t5r6d3w.cloudfront.net/images/courses/team-building-events/Half-Day.jpg" alt="Team Building Retreat" className="event-image" />
                <div className="event-description">
                    <h2>Team Building Retreat</h2>
                    <p>Strengthen team bonds and enhance collaboration at our annual team-building retreat.</p>
                </div>
            </div>
        </div>
    );
};

export default Events;
