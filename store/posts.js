export const state = () => ({
  list: [
    {
      id: 1,
      slug: 'getting-started-nuxt-markdown',
      title: 'Getting Started with Nuxt + MarkDown',
      created_at: '06/27/2017'
    },
    {
      id: 2,
      slug: 'my-top-10-favourites-of-being-a-freelancer-software-developer',
      title: 'My top 10 favourites of being a freelance software developer',
      created_at: '10/18/2016'
    },
    {
      id: 3,
      slug: 'setting-up-php-xdebug-with-laravel-vagrant-and-phpstorm',
      title: 'Setting up PHP xdebug with Laravel, Vagrant, and PHPStorm',
      created_at: '15/18/2016'
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
