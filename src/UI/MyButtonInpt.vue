<template>
    <button class="button">
        <slot> </slot>
    </button>
</template>

<script>
export default {
    name: 'MyButtonInpt'
}
</script>

<style scoped>
.button {
    margin-left: 10px;
    height: 50px;
    width: 70px;
    border: none;
    background: #1E6F9F;
    color: white;
    font: 500;
    font-size: 15px;
    border-radius: 7px;
    transition: all 0.2s;
}

.button:hover {
    background: #144968;
}

.button:active {
    background: black;
    color: white;
}
</style>