<template>
  <div class="post">
    <div v-html="postContent"></div>
  </div>
</template>
<script type="text/babel">
  import marked from 'marked'
  export default {
    layout: 'slug',
    head () {
      return {
        title: 'Andre Liem',
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    computed: {
      postContent () {
        let post = this.$store.state.posts.list.find((post) => {
          return (post.slug === this.$route.params.slug)
        })
        if (!post) {
          return ''
        }
        marked.setOptions({
          highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value
          }
        })
        return marked(require(`../../content/posts/${post.id}.md`))
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .post {
    pre {
      background-color: #f5f5f5;
      padding: 2em;
    }
    .hljs-built_in,
    .hljs-string,
    .hljs-section,
    .hljs-selector-class,
    .hljs-template-variable,
    .hljs-deletion,
    .hljs-function {
      color: #800;
    }
  }
</style>

