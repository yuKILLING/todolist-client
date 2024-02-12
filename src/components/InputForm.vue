<template>
    <div class="input-form">
        <div class="input_field">
            <MyInput v-model="post.text" @input="updatemodelValue" placeholder="Write, to add a note" maxlength="255">
            </MyInput>
            <h1 class="symbol_num">{{ symbolText }}</h1>
        </div>
        <MyButtonInpt @click="createPost">Add <i class="fa-solid fa-plus"></i> </MyButtonInpt>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            post: {
                text: '',
            },
            symbolText: '?/255'
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
                const uniqueId = uuidv4()
                this.post.id = uniqueId 
                this.$emit('create', this.post)
                this.$emit('update:modelValue', '')
            }
        },
        updatemodelValue(event) {
            this.symbolText = `${event.target.value.length}/255`
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

.input_field {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
}

.symbol_num {
    /* position: absolute;
    left: 390px;
    color: white;
    font-weight: 100;
    font-size: 19px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */

    position: absolute;
    right: 10px;
    /* Set the position from the right edge of the input_field */
    top: 50%;
    /* Position from the top edge of the input_field */
    transform: translateY(-50%);
    /* Vertically center the h1 element */
    color: white;
    font-weight: 100;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>