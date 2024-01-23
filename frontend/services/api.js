import Basic from '~/repositories/basic'

export default ($axios) => ({
    basic: Basic($axios),

    getBasic() {
        return this.basic.info();
    },

    getHomePage(query) {
        return this.basic.getHomePage(query);
    },

    getNewsPage(query) {
        return this.basic.getNewsPage(query);
    },

    getContactPage(query) {
        return this.basic.getContactPage(query);
    },

    getAboutUsPage(query) {
        return this.basic.getAboutUsPage(query);
    },

    getServicePage(query) {
        return this.basic.getServicePage(query);
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

    getMenu(query) {
        return this.basic.getMenu(query);
    },

    createContact(payload) {
        return this.basic.createContact(payload)
    },

    getCategoryService(payload) {
        return this.basic.getCategoryService(payload)
    },

    getPost(payload) {
        return this.basic.getPost(payload)
    },

    getSell(payload) {
        return this.basic.getSell(payload)
    },

    getService(payload) {
        return this.basic.getService(payload)
    },

    getBuildingPage(payload) {
        return this.basic.getBuildingPage(payload)
    },

    getBuilding(payload) {
        return this.basic.getBuilding(payload)
    },
});
