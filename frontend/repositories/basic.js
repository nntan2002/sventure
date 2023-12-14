const exercisePage = '/api/page-exercise';

export default ($axios) => ({
    getExercisePage(query) {
        return this.getData(exercisePage, query)
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