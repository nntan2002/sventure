const exercisePage = '/api/page-exercise';
const homePage = '/api/page-home';
const contactPage = '/api/page-contact';

const partner = '/api/our-partner';
const building = '/api/section-building';
const contact = '/api/section-contact';


const footer = '/api/footer';
const menu = '/api/menus/';

export default ($axios) => ({
    getExercisePage(query) {
        return this.getData(exercisePage, query)
    },

    getHomePage(query) {
        return this.getData(homePage, query)
    },

    getContactPage(query) {
        return this.getData(contactPage, query)
    },

    getSectionPartners(query) {
        return this.getData(partner, query)
    },

    getSectionBuilding(query) {
        return this.getData(building, query)
    },

    getSectionContact(query) {
        return this.getData(contact, query)
    },

    getFooter(query){
        return this.getData(footer, query) 
    },

    getMenu(query){
        return this.getData(menu, query) 
    },

    // COMMON GET DATA
    getData(url, query) {
        return new Promise((resolve, reject) => {
            $axios.get(`${url}?${query}`)
                .then(function ({
                    data,
                    status
                }) {
                    if (status === 200) {
                        resolve(data);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
})