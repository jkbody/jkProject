<template>
    <idv>
        <div v-for="book in books" :key="book.id">{{book.title}}</div>
    </idv>
</template>
<script>
import { request } from '@/util'

export default {
  name: 'booksIndex',
  data () {
    return {
      books: []
    }
  },
  methods: {
    async getBook () {
      const res = await request({
        method: 'GET',
        url: '/weapp/getbook'
      })
      this.books = res.books
      console.log(res.books)
    }
  },
  onShow () {
    this.getBook()
  }
}
</script>

<style scoped>

</style>
