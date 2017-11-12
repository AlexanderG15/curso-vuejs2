<template>
    <div>
        <h3 class="text-center">Register</h3>

        <input type="email" class="form-control m-b-15" placeholder="Email" v-model="user.email">
        <input type="text" class="form-control m-b-15" placeholder="Username" v-model="user.username">
        <input type="password" class="form-control m-b-15" placeholder="Password" v-model="user.password">
        <hr>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="register">Register</button>
        <p class="text-center">
            Alredy have an account? <router-link to="/auth/login">Login!</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "register",
        data: function () {
            return {
                user: {
                    email: "",
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            register: function () {
                this.$http.post('/users', this.user)
                    .then(function (res) {
                        alertify.success('Success: You can now login with your email and password')
                        this.$router.push('/auth/login')
                    })
            }
        }
    }
</script>

<style></style>