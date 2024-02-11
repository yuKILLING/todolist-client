<template>
    <div class="input-form">
        <MyInput v-model="post.text" @input="updatemodelValue" placeholder="Write, to add a note"> </MyInput>
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
    props: {
        modelValue: [String, Number]
    },
    methods: {
        createPost() {
            if (this.post.text === '') {
                alert('Write something')
            }
            else {
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.$emit('update:modelValue', '')
            }
        },
        updatemodelValue(event) {
            this.$emit('update:modelValue', event.target.value)
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