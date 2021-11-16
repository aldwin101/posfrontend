<template>
    <div>
        <div id="container">
            <div>
                <LogoutComp />
            </div>

            <div id="addContainer">
                <input class="addInput" type="text" v-model="firstname" placeholder="first name">
                <input class="addInput" type="text" v-model="lastname" placeholder="last name">
                <input class="addInput" type="text" v-model="username" placeholder="username">
                <input class="addInput" type="text" v-model="position" placeholder="position">
                <input class="addInput" type="text" v-model="mobilephone" placeholder="mobile phone">
                <input class="addInput" type="text" v-model="homephone" placeholder="home phone">
                <input type="button" value="Add user" @click="addEmployee">
            </div>

            <div>
                <EmployeeSubComp id="userInfo" v-for="employee in employees" :key="employee.userId"
                :getuserid="employee.userId"
                :getUsername="employee.username"
                :getFirstname="employee.firstName"
                :getLastname="employee.lastName"
                :getPosition="employee.position"
                :getMobilephone="employee.mobilePhone"
                :getHomephone="employee.homePhone"/>
            </div>
        </div>
    </div>
</template>

<script>
    import cookies from "vue-cookies"
    import axios from "axios"
    import EmployeeSubComp from './EmployeeSubComp.vue'
    import LogoutComp from './LogoutComp.vue'
    export default {
    components: { 
        EmployeeSubComp,
        LogoutComp 
        },
        name : "EmployeesComp",
        data() {
            return {
                firstname: "",
                lastname: "",
                username: "",
                position: "",
                mobilephone: "",
                homephone: "",
                userId: "",
                employees: []
            }
        },
        methods: {
            showEmployees() {
                axios.request({
                    url : process.env.VUE_APP_BASE_DOMAIN+"/api/users",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then((response) => {
                    this.employees = response.data
                    console.log(this.employees);
                }).catch((error) => {
                    console.log(error.response);
                })
            },
            addEmployee() {
                axios.request({
                    url: process.env.VUE_APP_BASE_DOMAIN+"/api/users",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        firstName: this.firstname,
                        lastName: this.lastname,
                        username: this.username,
                        position: this.position,
                        mobilePhone: this.mobilephone,
                        homePhone: this.homephone
                    }
                }).then((response) => {
                    this.newEmployee = response.data
                    console.log(this.newEmployee);
                }).catch((response) => {
                    console.log(response.error);
                })
            }
        },
        mounted () {
            this.showEmployees();
            this.token = cookies.get('token');

        },
    }
</script>

<style scoped>
#container {
    display: grid;
    grid-template-rows: repeat(4, fit-coontent());
    justify-items: center;

}
#userInfo {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    justify-items: center;
    align-items: center;
    border-radius: 2vw;
    background-color: rgb(108, 135, 158);
    margin: 2vh;
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

.addInput {
    background-color: white;
    color: black;
    width: 10vw;
    text-align: center;
}

</style>