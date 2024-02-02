<template>
    <button class="button">
        <i class="fa-solid fa-trash"></i>
    </button>
</template>

<script>
export default {
    name: "MyButton"
}
</script>

<style scoped>
.button {
    padding: 10px;
    color: black;
    background: transparent;
    border: none;
}

.button i {
    font-size: 20px;
    transition: all 0.2s;
}

.button:hover i {
    color: white;
}

.button i:active {
    transition: all 0.1s;
    color: rgb(68, 68, 68);
}
</style>