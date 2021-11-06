<template>
    <div id="container">
        <div id="loginContainer">
            <input type="text" v-model="username">
            <input type="password" v-model="password">
            <button type="submit" @click="login">Login</button>
        </div>
        <div id="logoContainer">
            <img src="../assets/POSLogo.png" alt="logo">
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name : "LoginComp",
        data() {
            return {
                username : "",
                password : ""
            }
        },
        methods: {
            login(){
                axios.request({
                    url: process.env.VUE_APP_BASE_DOMAIN+"/api/login",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "username" : this.username,
                        "password" : this.password
                    }
                }).then((response) => {
                    console.log("Success");
                    console.log(response.data.loginToken);
                    console.log(response.data.userId);
                    this.$router.push({name: 'Table'});
                    cookies.set('token', response.data.loginToken);
                    cookies.set('userLoggedinId', response.data.userId);
                }).catch((error) => {
                    console.log("Failed");
                    console.log(this.username);
                    console.log(this.password);
                    console.log(error.response);
                })
            }
        }
    }
</script>

<style scoped>
#container {
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    justify-items: center;
    align-items: center;
}

#logoContainer{
    display: grid;
    align-items: center;
    background-color: #d3c1ab;
    height: 100vh;
    width: auto;
}

input {
    background-color: #f0f8ff;
    border-radius: 2vw;
    border-color:transparent;
    width: 30vw;
    height: 5vh;
    font-size: 2vw;
    text-align: center;
}

button {
    width: 15vw;
    font-weight: bold;
    background-color: rgb(57, 104, 145);
    color: #f0f8ff;
    font-size: 2vw;
    border-radius: 1vw;
}

#loginContainer {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 2vw;
    justify-items: center;
}

</style>