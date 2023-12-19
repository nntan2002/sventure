import Basic from '~/repositories/basic'

export default ($axios) => ({
    basic: Basic($axios),

    getBasic() {
        return this.basic.info();
    },

    getHomePage(query) {
        return this.basic.getHomePage(query);
    },

    getSectionPartners(query) {
        return this.basic.getSectionPartners(query);
    },
    
    getSectionBuilding(query) {
        return this.basic.getSectionBuilding(query);
    },

    getSectionContact(query) {
        return this.basic.getSectionContact(query);
    },

    getFooter(query) {
        return this.basic.getFooter(query);
    },
});
