import Basic from '~/repositories/basic'

export default ($axios) => ({
    basic: Basic($axios),

    getBasic() {
        return this.basic.info();
    },

    getHomePage(query){
        return this.basic.getHomePage(query);
    }
});
