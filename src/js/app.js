new Vue({
  el:"#app",
  data:{
    message:"hello World!"
  }
})
new Vue({
  el:'#app2',
  data:{
    a:1,
    b:2
  }
})
new Vue({
  el:'#app3',
  data:{
    message:"测试"
  }
})
new Vue({
  el:'#app4',
  data:{
    messages:[
      {text:"我是循环1"},
      {text:"我是循环2"},
      {text:"我是循环3"}
    ]
  }
})

new Vue({
  el:"#example",
  data:{
    parentMessage:'我是测试整体的标题',
    items:[
      {'message':'我是多维数据1'},
      {'message':"我是多维数据2"}
    ]
  }

})

new Vue({
  el:'#app6',
  data:{
    'result':'1'
  }
})
new Vue({
  el:'#app7',
  data:{
    'message':'点击我触发点击事件',
    'mouse_mes':'鼠标移入触发鼠标事件'
  },
  methods:{
    cl:function(){
      alert('我是被触发的click事件');
    },
    mouse:function(){
      alert('我是被触发的mouse事件');
    }
  }
})
var vma=new Vue({
  el:'#app8',
  data:{
    'name':'ceshi',
    'txt':'第一次测试',
    'message':'ceshi:第一次测试'
  },
  computed:{
    site:{
      // getter
        get: function () {
          return this.name + ' ' + this.url
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.name = names[0]
          this.url = names[names.length - 1]
        }
    }
  }
})
vma.message='ceshi2:第二次测试';
document.write(vma.name);
document.write('</br>');
document.write(vma.txt);
