import React from 'react';
import BackgroundImage from "images/St-Peters-Images/sammy-williams-38Un6Oi5beE-unsplash.jpg"
import BackgroundImage2 from "images/St-Peters-Images/photo-1532329683184-6ffd13057d1c.jpg"
const StaticImageLoader = () => {
    return (
        <div>
            <img src={BackgroundImage} />
            <img src={BackgroundImage2} />


        </div>
    );
};

export default StaticImageLoader;