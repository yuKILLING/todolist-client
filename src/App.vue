<template>
  <div class="app">
    <header>
      <img src="./images/Logo.png" class="logo" alt="">
    </header>
    <InputForm class="inptform" @create="createPost"></InputForm>
    <PostList class="Post_List" :posts="posts" @remove="remove" v-if="this.posts.length > 0"></PostList>
    <div v-else style="margin-top:100px; font-size: 15px;">
      <h1>There are no notes here o/</h1>
    </div>

  </div>
</template>

<script>
import InputForm from './components/InputForm.vue';
import PostItem from './components/PostItem.vue';
import PostList from './components/PostList.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: { InputForm, PostItem, PostList },
  data() {
    return {

    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    ...mapMutations({
      setPosts: 'post/setPosts',
      setEmpty: 'post/setEmpty'
    }),
    remove(post) {
      console.log('gg');
      const newPosts = this.posts.filter(p => p.id !== post.id);
      console.log(newPosts);
      this.$store.commit('setPosts', newPosts);
    },

  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,

    }),
  },

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

body {
  background-color: rgb(34, 34, 34);
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;
  background-color: #0D0D0D;
  flex-direction: column;
  position: relative;
}

.inptform {
  position: absolute;
  top: 32.6%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Post_List {
  margin-top: 40px;
}
</style>
