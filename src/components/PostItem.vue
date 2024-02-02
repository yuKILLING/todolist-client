<template>
    <div class="post">
        <div class="text">
            <div><input type="checkbox"></div>
            <div>{{ post.text }}</div>
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
}

.text>div>input {
    border-radius: 50%;
}
</style>