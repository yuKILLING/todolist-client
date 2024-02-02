export const postModule = {
  state: () => ({
    posts: [
      { text: "xddddd", id: 1 },
      { text: "xddddd", id: 2 },
      { text: "xddddd", id: 3 },
    ],

  }),
  getters: {},
  mutations: {
    setPosts(state, newPosts) {
      state.posts = newPosts;
    },

  },
  actions: {
    // removePost({ state, commit, post }) {
    //   console.log("ff");
    //   const newArr = state.posts.filter((p) => p.id !== state.post.id);
    //   commit("setPosts", newArr);
    // },
  },
};
