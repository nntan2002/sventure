const exercisePage = '/api/page-exercise';
const home = '/api/page-home';
const partner = '/api/our-partner';
const building = '/api/section-building';
const contact = '/api/section-contact';

export default ($axios) => ({
    getExercisePage(query) {
        return this.getData(exercisePage, query)
    },

    getHomePage(query) {
        return this.getData(home, query)
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