<template>
<div>
    <h1 class="title">My Account</h1>
</div>

<div class="accountinfosection">
<h1>Username: {{ useCounterStore().email }}</h1>
<h1>Password: {{ useCounterStore().password }}</h1>
</div>
</template>

<style scoped>
.title{
    font-size: 100px;
    text-align: center;
}
</style>

<script setup>
import { useCounterStore } from '../stores/counter';
import {ref} from 'vue'
ref(useCounterStore())
</script>