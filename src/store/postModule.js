import axios from 'axios'
export const postModule = {
  state: () => ({
    posts: [],

  }),
  getters: {},
  mutations: {
    setPosts(state, newPosts) {
      state.posts = newPosts;
    },

  },
  actions: {
    async getPosts({state, commit}){
      fetch('http://localhost:8080/api/texts/')
      .then(json=>json.json())
      .then(data=>{
        commit('setPosts', [...data])
      })
    },
    async deletePost({state,commit,dispatch},post){
      try {
        await axios.delete(`http://localhost:8080/api/texts/${post.id}`)
        dispatch('getPosts')
      } catch (error) {
        console.log(error)
      }
    },
    async addPost({state,commit,dispatch},post){
        try {
          const shortId = post.id.toString().slice(0, 7);
          console.log(shortId)
          const res = await axios.post('http://localhost:8080/api/texts/', {text: post.text, id: parseInt(shortId)})
          dispatch('getPosts')
        } catch (error) {
          console.log(error)
        }
    }
  },
  namespaced: true
};
