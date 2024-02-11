<template>
    <div>
        <transition-group name="user-list" tag="p">
            <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"> </PostItem>
        </transition-group>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.user-list-item {
    display: inline-block;
    margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.4s ease-in-out;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateY(50px);
}

.user-list-move {
    transition: transform 0.4s ease;
}

.user-list-leave-active {
    position: absolute;
}
</style>