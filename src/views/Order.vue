<template>
    <div id="container">
        <div id="logoutContainer">
        <LogoutComp />
        </div>
        <div id="menuOrderContainer">
            <div>
                <MenuComp />
            </div>
            <div id="orderContainer">
                <OrderComp />
            </div>
        </div>
    </div>
</template>

<script>
    import LogoutComp from '../components/LogoutComp.vue'
    import MenuComp from '../components/MenuComp.vue'
    import OrderComp from '../components/OrderComp.vue'
    export default {
        name : 'Order',
        components: {
            OrderComp,
            MenuComp,
            LogoutComp
        }
    }
</script>

<style scoped>
#menuOrderContainer {
    border-style: solid;
    margin: auto;
    width: 70vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
#orderContainer {
    background-color: aliceblue;
}

</style>