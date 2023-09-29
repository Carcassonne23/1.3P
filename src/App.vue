<template>
        <div class="topnav">
            <router-link to="/">Home</router-link>
            <router-link to="/CharactersComponent">Characters</router-link>
            <router-link to="/RingsComponent">The Rings of Power</router-link>
            <router-link to="/FindRingComponent">Find the Ring</router-link>
            <router-link to="/ContactComponent">Contact</router-link>
        </div>
        <br>
        <h1>Welcome to Alex's Lord of the Rings Website</h1>
        <br>
        <router-view></router-view>
</template>