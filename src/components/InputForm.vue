<template>
    <div class="input-form">
        <MyInput v-model="post.text" placeholder="Write, to add a note"> </MyInput>
        <MyButtonInpt @click="createPost">Add <i class="fa-solid fa-plus"></i> </MyButtonInpt>
    </div>
</template>

<script>

export default {
    data() {
        return {
            post: {
                text: ''
            }
        }
    },
    methods: {
        createPost() {
            if (this.post.text === '') {
                alert('Write something')
            }
            else {
                console.log('ff')
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    text: ''
                }
            }
        }
    }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.input-form {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>