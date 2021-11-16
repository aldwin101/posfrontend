<template>
    <div id="container">
        <div>
        <OrderSubComp />
        </div>
        
        <div id="orderInnerContainer" v-for="order in orders" :key="order.userId">
            <p>{{order.dishName}}</p>
            <p>{{order.price}}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import cookies from "vue-cookies"
    import OrderSubComp from './OrderSubComp.vue'
    export default {
        name : "OrderComp",
        components: {
            OrderSubComp
        },
        data() {
            return {
                id: this.userId,
                orders: [],
                activeOrders: []
            }
        },
        methods: {
            getOrders() {
                axios.request({
                url : process.env.VUE_APP_BASE_DOMAIN+"/api/orders",
                method: "GET",
                headers: {
                    "Content-Type" : "application/json"
                }
                }).then((response) => {
                    this.orders = response.data.filter(order => order.tableNumber == "1");
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            },
            addOrder() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/orders",
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },

                })
            },
            ordersInTable() {
                this.activeOrders = this.orders
            }
        },
        mounted () {
            this.getOrders();
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
#container, p {
    background-color: transparent;
}
#orderInnerContainer{
    background-color: transparent;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 3vh 0vh 3vh 10vh;
}

</style>