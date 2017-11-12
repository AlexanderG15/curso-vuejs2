<template>
    <div>
        <h3 class="text-center">Register</h3>

        <input type="email" class="form-control m-b-15" placeholder="Email">
        <input type="text" class="form-control m-b-15" placeholder="Username">
        <input type="password" class="form-control m-b-15" placeholder="Password">
        <hr>
        <button class="btn btn-lg btn-primary btn-block">Register</button>
        <p class="text-center">
            Alredy have an account? <router-link to="/auth/login">Login!</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style></style>