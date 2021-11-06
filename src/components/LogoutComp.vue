<template>
    <div>
        <button>Logout</button>
    </div>
</template>

<script>
    import axios from 'axios'
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
        },
    }
</script>

<style scoped>

</style>