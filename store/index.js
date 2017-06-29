import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: 1,
            slug: 'getting-started-nuxt-markdown',
            title: 'Getting Started with Nuxt + MarkDown',
            created_at: '06/27/2017',
            meta: {
              id: 1,
              name: 'Getting Started with Nuxt + MarkDown',
              content: 'Learn how to setup a static site using Nuxt + MarkDown'
            }
          },
          {
            id: 2,
            slug: 'my-top-10-favourites-of-being-a-freelancer-software-developer',
            title: 'My top 10 favourites of being a freelance software developer',
            created_at: '10/18/2016',
            meta: {
              id: 2,
              name: 'My Top 10 Freelancing Benefits for Software Developers',
              content: 'My Top 10 Favourites of being freelancer in Software'
            }
          },
          {
            id: 3,
            slug: 'setting-up-php-xdebug-with-laravel-vagrant-and-phpstorm',
            title: 'Setting up PHP xdebug with Laravel, Vagrant, and PHPStorm',
            created_at: '15/18/2016',
            meta: {
              id: 3,
              name: 'Setting up PHP XDebug with Vagrant + Phpstorm',
              content: 'Tutorial on getting xDebug setup on phpstorm on a Vagrant machine'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
