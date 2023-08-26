type HomeSection = {
    title: string;
    content: string;
    subContent: string;
    subContent2: string;
    button: string;
};

type LinksSection = {
    home: string;
    blog: string;
    pricing: string;
    contact: string;
    login: string;
};

type LangsSection = {
    fr: string;
    en: string;
};

type FeaturesSection = {
    title: string;
    content: string;
};

type PersonalizeSection = {
    title: string;
    content: string;
};

type AvailabilitySection = {
    title: string;
    content: string;
};

type OrderManagementSection = {
    title: string;
    content: string;
};

type DataAnalysisSection = {
    title: string;
    content: string;
};

type Testimonial = {
    name: string;
    role: string;
    message: string;
};

type FooterSection = {
    legal: {
        legal: string;
        termsAndConditions: string;
        privacyPolicy: string;
        blog: string;
    };
    copyright: string;
    myaichat: string;
};

type Translations = {
    home: HomeSection;
    links: LinksSection;
    langs: LangsSection;
    features: FeaturesSection;
    personalize: PersonalizeSection;
    Availability: AvailabilitySection;
    OrderManagement: OrderManagementSection;
    DataAnalysis: DataAnalysisSection;
    firstClass: string;
    conversionOptimization: FeaturesSection;
    instantResponses: FeaturesSection;
    welcome: {
        title: string;
        subTitle: string;
        content: string;
        items: Array<{ title: string }>;
    };
    Testimony: string;
    comment: string;
    testimonials: Testimonial[];
    footer: FooterSection;
};

export default Translations;
