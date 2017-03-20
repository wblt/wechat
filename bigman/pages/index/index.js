//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    //高中部数据
    array1: [{
      title:'计算机应用',
      message: '12'
    }, {
      title:'电子商务',
      message: '13'
    },{
      title:'电算化会计',
      message: '13'
    },{
      title:'商务英语',
      message: '13'
    },{
      title:'文秘',
      message: '13'
    },{
      title:'电子电器',
      message: '13'
    },{
      title:'数控模具',
      message: '13'
    },{
      title:'旅游和酒店管理',
      message: '13'
    }],
    //就业部数据
    array2:[{
      title:'计算机应用',
      message: '12'
    }, {
      title:'电子商务',
      message: '13'
    },{
      title:'电算化会计',
      message: '13'
    },{
      title:'汽车制造与维修',
      message: '13'
    },{
      title:'文秘（幼师方向）',
      message: '13'
    },{
      title:'电子电器',
      message: '13'
    },{
      title:'数控模具',
      message: '13'
    },{
      title:'旅游和酒店管理',
      message: '13'
    }]
  },
  onLoad: function () {
    //视图加载完成


  }
})
