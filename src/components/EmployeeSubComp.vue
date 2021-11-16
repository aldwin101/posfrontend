<template>
    <div>
        <div id="paraContainer">
        <p class="label">employee id</p>
        <p class="label">username</p>
        <p class="label">first name</p>
        <p class="label">last name</p>
        <p class="label">position</p>
        <p class="label">home phone</p>
        <p class="label">mobile phone</p>
        <p>{{getuserid}}</p>
        <p>{{getUsername}}</p>
        <p>{{getFirstname}}</p>
        <p>{{getLastname}}</p>
        <p>{{getPosition}}</p>
        <p>{{getMobilephone}}</p>
        <p>{{getHomephone}}</p>
        </div>

        <div id="inputContainer">
            <input type="button" value="delete" @click="delEmployee">
            <input type="button" value="edit">
        </div>
    </div>
    
</template>

<script>
    import axios from "axios"
    import cookies from "vue-cookies"
    export default {
        name : "EmployeeSubComp",
        props: {
            getuserid : Number,
            getUsername : String,
            getFirstname : String,
            getLastname : String,
            getPosition : String,
            getMobilephone : Number,
            getHomephone : Number
        },
        data() {
            return {
                userId: this.getuserid
            }
        },
        methods: {
            delEmployee() {
                axios.request({
                    url: process.env.VUE_APP_BASE_DOMAIN+"/api/users",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "loginToken": this.token,
                        "userId": this.userId
                    }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        mounted () {
            this.token = cookies.get('token');
        },

    }
</script>

<style scoped>
input{
    margin: 2vh;
    width: 7vw;
    height: 5vh;
    font-weight: bold;
    background-color: rgb(57, 104, 145);
    color: #f0f8ff;
    font-size: 1vw;
}

#paraContainer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1fr 1fr);
    justify-items: center;
    width: 80vw;
    font-size: 1.5vw;
    row-gap: 2vh;
    background-color: transparent;
}

p, #inputContainer{
    background-color: transparent;
}

.label {
    font-weight: bold;
    color:black;
    font-size: .9vw;
}
</style>