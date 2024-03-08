import Hero from '../components/organisms/Hero';
import Features from '../components/organisms/Features';
import FirstClass from '../components/organisms/FirstClass';
import WhatWeDo from '../components/organisms/WhatWeDo';
import Testimonial from '../components/organisms/Testimonial';
import Prices from '../components/organisms/prices';

const Index = () => {
    return (
        <div className="overflow-x-hidden app-page">
            <Hero />

            <Features />

            <FirstClass />

            {/*<WhatWeDo />*/}

            <Prices />

            <Testimonial />
        </div>
    );
};

export default Index;
