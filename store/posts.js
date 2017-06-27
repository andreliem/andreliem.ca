export const state = () => ({
  list: [
    {
      id: 1,
      slug: 'getting-started-nuxt-markdown',
      title: 'Getting Started with Nuxt + MarkDown',
      created_at: '06/27/2017'
    }
  ]
})

export const mutations = () => ({
  add (state, title) {
    state.list.push({
      title: title
    })
  },
  remove (state, { post }) {
    state.list.splice(state.indexOf(post), 1)
  }
})
