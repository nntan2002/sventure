import api from '~/services/api'

export default (ctx, inject) => {
    inject('api', api(ctx.$axios))
}