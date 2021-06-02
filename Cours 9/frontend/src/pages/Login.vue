<!-- SECTION HTML -->

<template>
    <div id="content" class="login">
        <main>
            <form action="#" method="POST" @submit="login">
                <input type="text" name="username" class="username" placeholder="Nom d'utilisateur" v-model="username" required/>
                <input type="submit" value="Se connecter" class="submit">
            </form>
        </main>
        
    </div>
</template>

<!-- SECTION CODE -->
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: ""
        }
    },
    // FIN DE DATA
    methods: {
        login(e) {
            e.preventDefault();
            // console.log(this.username);
            this.$router.push({
                path: '/chat/' + this.username
            })
}
    }
};
</script>

<!-- SECTION CSS -->
<style scoped>
    .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.login input.nom {
    width: 300px;
    border-radius: 8px;
    border: none;
    padding: 15px 15px;
    background: #464646;
    font-size: 16px;
    color: #ccc;
}

.login input.submit {
    border-radius: 8px;
    border: none;
    padding: 15px 15px;
    margin-left: 5px;
    background-color: #0f5781;
    font-size: 16px;
    color: #ccc;
    transition: background-color 0.2s ease;
    cursor: pointer;
}
.login input.submit:hover {
    background-color: #0c4769;
}
</style>
