<template>
    <div id="container">
        <div id="dishContainer">
            <p>{{getDishName}}</p>
            <p>{{getPrice}}</p>
        </div>

        <div id="inputContainer">
            <input type="button" @click="toggleEdit" value="edit" />
            <input type="button" @click="deleteDish" value="delete" />
        </div>

        <div id="toggleContainer">
            <div :class="{toggle : isToggle}">
                <input type="text" v-model="dishName">
                <input type="text" v-model="price">
                <input type="button" value="Cancel">
                <input type="button" value="Save" @click="editDish">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import cookies from 'vue-cookies'
    export default {
        name : "DishesSubComp",
        props : {
            getDishName : String,
            getPrice : String,
            getDishId : Number
        },
        data() {
            return {
                dishName: this.getDishName,
                price: this.getPrice,
                dishId: this.getDishId,
                isToggle: true
            }
        },
        methods: {
            editDish() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/dishes",
                    method: "PATCH",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "loginToken": this.token,
                        "dishName": this.dishName,
                        "price": this.price,
                        "dishId": this.dishId
                    }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error.response);
                })
            },

            deleteDish() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/dishes",
                    method : "DELETE",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    data: {
                        "loginToken": this.token,
                        "dishId": this.dishId
                    }
                }).then((response) => {
                    console.log(response);
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
        },
        mounted () {
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
#container {
    display: grid;
    grid-template-columns: repeat(3, fit-content(3vw));
    column-gap: 5vw;
}

#dishContainer {
    display: grid;
    grid-template-columns: repeat(2, fit-content(3vw));
    column-gap: 10vh;
    align-items: center;
    margin-left: 5vw;
    font-weight: bold;
}

#toggleContainer {
    position: absolute;
    top: 40vh;
    right:35vw;
    height: 10vh;
    
}

.toggle {
    display: none;
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

#inputContainer {
    display: grid;
    grid-template-columns: repeat(2, fit-content(3vw));
}
</style>