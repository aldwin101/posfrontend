<template>
    <div>
        <div id="container">
            <div id="inputContainer">
                <input type="button" value="Appetizer" @click="changeToAppetizer">
                <input type="button" value="Soup" @click="changeToSoup">
                <input type="button" value="Main Dishes" @click="changeToMainDish">
                <input type="button" value="Desserts" @click="changeToDessert">
                <input type="button" value="Beverages" @click="changeToBeverage">
            </div>
            <div v-for="dish in activeDishes" :key="dish.dishId">
                <div id="innerdishContainer">
                    <p>{{dish.dishName}}</p>
                    <p>{{dish.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'MenuComp',
        data() {
            return {
                appetizers: [],
                soup: [],
                mainDish:[],
                dessert:[],
                beverage:[],
                activeDishes: [],
            }
        },
        methods: {
            getDishes() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/dishes",
                    method : "GET",
                    headers : { 
                        "Content-Type": "application/json" 
                        }
                }).then((response) => {
                    this.appetizers = response.data.filter(dish => dish.category == "appetizer")
                    this.soup = response.data.filter(dish => dish.category == "soup")
                    this.mainDish = response.data.filter(dish => dish.category == "main dish")
                    this.dessert = response.data.filter(dish => dish.category == "dessert")
                    this.beverage = response.data.filter(dish => dish.category == "beverage")
                    console.log(this.appetizers);
                }).catch((error) => {
                    console.log(error);
                })
            },
            changeToAppetizer () {
                this.activeDishes = this.appetizers
            },
            changeToSoup () {
                this.activeDishes = this.soup
            },
            changeToMainDish () {
                this.activeDishes = this.mainDish
            },
            changeToDessert () {
                this.activeDishes = this.dessert
            },
            changeToBeverage () {
                this.activeDishes = this.beverage
            }
        },
        mounted () {
            this.getDishes();
        },
    }
</script>

<style scoped>
#container {
    display: grid;
    grid-template-rows: repeat(2, fit-content());
    row-gap: 1vh;
}

input {
    margin: 2vh 1vh 0vh 1vh;
    background-color: rgb(57, 104, 145);
    color: #f0f8ff;
}
#inputContainer {
    text-align: center;
    margin: 4vh;
}

#innerdishContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8vw;
    row-gap: 8vh;
}
</style>