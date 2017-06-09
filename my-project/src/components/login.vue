<template>
  <div class="login">
    <p>信息列表</p>
    <p>输入信息：<span>{{userName}}</span></p>
    <p>
      <input type="text" placeholder="请输入信息"  v-model="userName">
    </p>
    <p v-on:click="addMessage(userName)">添加</p>
    <ul>
    <li v-for="item in items" class="red" v-bind:class="{green:item.flag}"
     >{{item.message}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'login',
  data () {
    return {
      userName: '',
      items: [
        {
          message: 'message1',
          flag: true
        },
        {
          message: 'message2',
          flag: false
        }
      ]
    }
  },
  methods: {
    addMessage: function (userName) {
      if (this.userName !== '') {
        this.items.push({
          'message': this.userName,
          'flag': false
        })
        this.userName = ''
      }
    }
  }
}
</script>
<style>
  .red{
    color: red;
  }
  .green{
    color: green;
  }
</style>
