<template>
    <div>
        <div>
            <LogoutComp />
        </div>
        <div id="dishContainer">
            <div id="inputContainer">
                <input type="button" value="Appetizer" @click="changeToAppetizer">
                <input type="button" value="Soup" @click="changeToSoup">
                <input type="button" value="Main Dish" @click="changeTomainDish">
                <input type="button" value="Dessert" @click="changeToDessert">
                <input type="button" value="Beverage" @click="changeToBeverage">
                <input type="button"  @click="toggleEdit" value="Add dish">
            </div>

            <div :class="{toggle : isToggle}">
                <input class="textInput" v-model="dishname" type="text" placeholder="dish name">
                <input class="textInput" v-model="price" type="text" placeholder="price">
                <input class="textInput" v-model="category" type="text" placeholder="category">
                <input type="button" @click="addDish" value="add">
            </div>

            <div>
                <DishesSubComp v-for="dish in activeDishes" :key="dish.dishId"
                :getDishName="dish.dishName"
                :getPrice="dish.price"
                :getDishId="dish.dishId"/>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    import LogoutComp from './LogoutComp.vue'
    import DishesSubComp from './DishesSubComp.vue'
    export default {
    components: { 
        LogoutComp,
        DishesSubComp 
        },
        name: 'DishesComp',
        data() {
            return {
                dishname: "",
                price: "",
                category: "",
                appetizers: [],
                soup: [],
                mainDish: [],
                dessert:[],
                beverage:[],
                activeDishes: [],
                dishId: this.dishId,
                isToggle: true
            }
        },
        methods: {
            getDishes() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/dishes",
                    method : "GET",
                    headers : { 
                        "Content-Type": "application/json" 
                        },
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

            addDish() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/dishes",
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    data: {
                        "loginToken": this.token,
                        "dishName": this.dishname,
                        "price": this.price,
                        "category": this.category
                    }
                }).then((response) => {
                    this.newDish = response.data
                    console.log(this.newDish);
                }).catch((error) => {
                    console.log(error.response);
                })
            },

            toggleEdit() {
                if(this.isToggle == true){
                    this.isToggle = false
                }else {
                    this.isToggle = true
                }
            },
            
            changeToAppetizer () {
                this.activeDishes = this.appetizers
            },
            changeToSoup () {
                this.activeDishes = this.soup
            },
            changeTomainDish () {
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
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
#dishContainer {
    border-style: solid;
    margin: auto;
    width: 70vw;
    height: 80vh;
    text-align: center;
}

input{
    margin: 2vh;
    width: 7vw;
    height: 5vh;
    font-weight: bold;
    background-color: rgb(57, 104, 145);
    color: #f0f8ff;
    font-size: 1vw;
}

.textInput {
text-align: center;
background-color: #f0f8ff;
color: black;
}

.toggle {
    display: none;
}
</style>