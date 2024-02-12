
<template>
    <input type="text" class="inpt" @input="updateInput">
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.inpt {
    width: 450px;
    height: 50px;
    border: none;
    border-radius: 7px;
    outline: none;
    color: white;
    background: rgb(63, 63, 63);
    padding-left: 10px;
    font-size: 20px;
    padding-right: 70px;
}
</style>