<template>
    <div id="logoutContainer">
        <button>Lock screen</button>
        <button @click="goToTables">Tables</button>
        <button @click="goToDishes">Dishes</button>
        <button @click="goToEmployees">Employees</button>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'LogoutComp',
    
        methods: {
            logout(){
                axios.request({
                    url: process.env.VUE_APP_BASE_DOMAIN+"/api/login",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "loginToken" : this.token
                    }
                }).then(() => {
                    this.$router.push({name: 'Login'});
                    
                }).catch(() => {
                })
            },
            goToTables() {
                this.$router.push('Table');
            },
            goToDishes() {
                this.$router.push('Dishes');
            },
            goToEmployees() {
                this.$router.push('Employees');
            }
        },
        mounted () {
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
    #logoutContainer {
        text-align: center;
    }
    
    button {
        margin: 4vh;
        width: 7vw;
        height: 5vh;
        font-weight: bold;
        background-color: rgb(57, 104, 145);
        color: #f0f8ff;
        font-size: 1vw;
        border-radius: 1vw;
    }
</style>