<template>
    <div>
        <h3 class="text-center">Login</h3>
        <input type="text" class="form-control m-b-15" placeholder="Username" v-model="user.username">
        <input type="password" class="form-control m-b-15" placeholder="Password" v-model="user.password">
        <hr>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="login">Sign in</button>
        <p class="text-center">
            Don´t have an account? <router-link to="/auth/register">Sign up!</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login: function () {
                this.$http.post('/auth', this.user)
                    .then(function (res) {
                        this.$auth.setToken(res.body.token, Date.now() + 14400000) // 4 hours
                        this.$router.push('/newsfeed')
                        alertify.success("Success! You can now login")

                    })
            }
        }
    }
</script>

<style></style>