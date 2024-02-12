<template>
    <div class="post">
        <div class="text">
            <div><button @click="buttonClicked" class="checkBTN">
                    <i class="fa-regular fa-circle" v-if="isPressed === false"></i>
                    <i class="fa-solid fa-circle" v-else></i>
                </button></div>
            <div :class="{ 'line_through': isPressed }" style="font-size: 23px;"><label class="label_text">{{
                post.title }}</label></div>
        </div>
        <div>
            <MyButton @click="$emit('remove', post)"> </MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isPressed: false
        }
    },
    methods: {
        buttonClicked() {
            if (this.isPressed) {
                console.log('true')
                this.isPressed = false
            }
            else {
                console.log('false')
                this.isPressed = true
            }
        }
    }
}
</script>

<style scoped>
.post {
    display: flex;
    background: rgb(60, 60, 60);
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 700px;
    padding-inline: 15px;
    color: #fafafa;
    font: 900;
    border-radius: 15px;
    margin: 15px 0px;
}

.text {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.line_through {
    text-decoration: line-through;
    text-decoration-thickness: 2.5px;
}

.checkBTN {
    border: none;
    outline: none;
    background: transparent;
}

.text>div>input {
    border-radius: 50%;
}
</style>