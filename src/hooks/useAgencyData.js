import agencyData from '../../data/agency.json';

// Custom hook to access agency data
export const useAgencyData = () => {
    return agencyData;
};

// Individual data access functions for convenience
export const getCompanyInfo = () => agencyData.company;
export const getContactInfo = () => agencyData.contact;
export const getHeroData = () => agencyData.hero;
export const getServices = () => agencyData.services;
export const getWhyChooseUs = () => agencyData.whyChooseUs;
export const getStatistics = () => agencyData.statistics;
export const getTestimonials = () => agencyData.testimonials;
export const getLinkedInPosts = () => agencyData.linkedinPosts;
export const getNavigation = () => agencyData.navigation;
export const getCTA = () => agencyData.cta;
export const getSEO = () => agencyData.seo;
export const getTeam = () => agencyData.team;
export const getPricing = () => agencyData.pricing;

// Helper functions
export const getServiceById = (id) => agencyData.services.find(service => service.id === id);
export const getTestimonialById = (id) => agencyData.testimonials.find(testimonial => testimonial.id === id);
export const getTeamMemberById = (id) => agencyData.team.find(member => member.id === id);

export default agencyData;