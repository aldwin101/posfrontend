<template>
    <div id="container">
        <div id="logoutContainer">
            <LogoutComp />
        </div>
        <div id="buttonContainer">
            <button @click="goToOrder">Table 1</button>
            <button @click="goToOrder">Table 2</button>
            <button @click="goToOrder">Table 3</button>
            <button @click="goToOrder">Table 4</button>
            <button @click="goToOrder">Table 5</button>
            <button @click="goToOrder">Table 6</button>
            <button @click="goToOrder">Table 7</button>
            <button @click="goToOrder">Table 8</button>
            <button @click="goToOrder">Table 9</button>
            <button @click="goToOrder">Table 10</button>
            <button @click="goToOrder">Table 11</button>
            <button @click="goToOrder">Table 12</button>
        </div>
    </div>
</template>

<script>
    import LogoutComp from './LogoutComp.vue'
    export default {
        name : 'TableComp',
        components: {
            LogoutComp
        },
        methods: {
            goToOrder() {
                this.$router.push('Order');
            }
        },
    }
</script>

<style scoped>
#container {
    display: grid;
    grid-template-rows: repeat(2, fit-content());
    justify-items: center;
    align-items: center;
}

#buttonContainer {
    margin-top: 5vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2vh;
}

button {
    background-color: rgb(57, 104, 145);
    border-radius: 5vw;
    width: 20vw;
    height: 14vh;
    color: rgb(240, 248, 255);
    font-size: 2vw;
}
</style>