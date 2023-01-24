import {createStore} from 'vuex'
import api from "@/api";
import router from "@/router";

const store_home = createStore({
    state() {
        return {
            //widget cart
            count: 0,
            totalPrice: 0,
            //icon cart
            cartIds: [],
            //icon wishlist
            wishlistIds: [],
            //nav main
            activeEl: 0,
            //nav personal
            activeElP: 0,
            //user check
            authUser: localStorage.getItem('token'),
            //massages after click wishlist or add to cart
            messages: [],
            //userInfo
            userInfo: null,
        }
    },
    mutations: {
        increment(state) {
            let parts = JSON.parse(localStorage.getItem('order'))
            if (parts) {
                let total = null
                let totalPrice = null
                state.cartIds = []
                parts.filter(part =>
                    total += part.qty,
                )
                parts.filter(part =>
                    totalPrice += part.price * part.qty
                )
                parts.filter(part =>
                    state.cartIds.push(part.id)
                )
                state.count = total
                state.totalPrice = totalPrice
            } else {
                state.count = 0
                state.totalPrice = 0
                state.cartIds = []
            }
        },

        message(state, value) {
            let timeStamp = Date.now().toLocaleString()
            state.messages.unshift({
                number: value.number,
                name: value.name,
                id: timeStamp,
                color: value.color
            })
        },

        menu(state, value) {
            state.activeEl = value
        },

        menuPersonal(state, value) {
            state.activeElP = value
        },

        wishlistIds(state, value) {
            state.wishlistIds = value
        },

        setUser(state, value) {
            state.userInfo = value
        }

    },
    actions: {

        addToOrder({commit}, part) {
            let order = localStorage.getItem('order')
            let message = {
                number: part.part_number,
                name: 'Запчастина додана до замовлення',
                color: 'background: green'
            }
            let newAddOrder = [
                {
                    'id': part.id,
                    'image': part.image,
                    'name': part.part_name,
                    'number': part.part_number,
                    'price': part.price,
                    'qty': 1,
                    'currency':part.currency
                }
            ]
            if (!order) {
                localStorage.setItem('order', JSON.stringify(newAddOrder))
                commit('increment')
                commit('message', message)
            } else {
                order = JSON.parse(order)
                order.forEach(partInOrder => {
                    if (partInOrder.id === part.id) {
                        partInOrder.qty = Number(partInOrder.qty) + 1
                        newAddOrder = null
                    }
                })

                Array.prototype.push.apply(order, newAddOrder)
                localStorage.setItem('order', JSON.stringify(order))
                commit('increment')
                commit('message', message)
            }
        },

        addToRecentViews({commit}, part) {
            let recent_views = localStorage.getItem('recent')

            let newAddRecentViews = [
                {
                    'id': part.id,
                    'image': part.image,
                    'name': part.part_name,
                    'number': part.part_number,
                    'price': part.price,
                }
            ]
            if (!recent_views) {
                localStorage.setItem('recent', JSON.stringify(newAddRecentViews))
            } else {
                recent_views = JSON.parse(recent_views)

                recent_views.forEach(recent_part => {
                    if (recent_part.id === part.id){
                        newAddRecentViews = null
                    }
                })
                    Array.prototype.unshift.apply(recent_views, newAddRecentViews)
                    if (recent_views.length > 3) {
                        recent_views.splice(3)
                    }
                    localStorage.setItem('recent', JSON.stringify(recent_views))
                }
            },

        getColor({commit}, part) {
            let message = '';
            if (this.state.wishlistIds.includes(part.id)) {
                message = {
                    number: part.part_number,
                    name: 'Видалено із списку бажань',
                    color: 'background: grey'
                }
                commit('message', message)
            } else {
                message = {
                    number: part.part_number,
                    name: 'Додано до списку бажань',
                    color: 'background: green'
                }
                commit('message', message)
            }
        },

        addToWishlist({commit}, part) {
            let wishlistArr = []
            this.dispatch('getColor', part)
            api.post('/api/wishlist/' + part.id)
                .then(res => {
                    res.data.filter(part => {
                        wishlistArr.unshift(part.id)
                    })
                    commit('wishlistIds', wishlistArr)
                })
        },

        getWishlist({commit, state}) {
            if (state.authUser) {
                let wishlistArr = []
                api.post('/api/getWishlistCheck')
                    .then(res => {
                        res.data.filter(part => {
                            wishlistArr.unshift(part.id)
                        })
                        commit('wishlistIds', wishlistArr)
                    })
            }
        },

        getPartSingle({commit}, part) {
            router.push({name: 'part_single', params: {id: part.id}})
            this.dispatch('addToRecentViews', part)
        },

        getUser({commit}) {
            api.post('/api/auth/me')
                .then(res => {
                    commit('setUser', res.data.data)
                })
        },
    },

})

export default store_home