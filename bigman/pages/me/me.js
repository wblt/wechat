var app = getApp()
Page({
  data:{
    sss:"dddd"
  },
  onInput:function(event){  
        this.data.sss = event.detail;
  },
  onRequest:function() {
    console.log("我输入了"+this.data.sss);
  }
})
