import Hero from "../components/organisms/Hero";
import Features from "../components/organisms/Features";
import FirstClass from "../components/organisms/FirstClass";
import WhatWeDo from "../components/organisms/WhatWeDo";
import Testimonial from "../components/organisms/Testimonial";

const Index = () => {

    return (
        <div>
            <div className="overflow-x-hidden">
                <Hero/>

                <Features/>

                <FirstClass/>

                <WhatWeDo/>

                <Testimonial/>
            </div>
        </div>
    );
};

export default Index;
