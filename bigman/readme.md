### 开发环境

微信开发者工具https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html

### 获取APPid
微信公众平台注册微信小程序账号 获取开发者APPID
https://mp.weixin.qq.com/wxopen/initprofile?action=home&lang=zh_CN&token=1343105814

### 使用组件
微信这里提供了很多组件，这个和之前的微信样式有点类似。通过组件的组合可以拼接一些界面使用。这个有点像css那样，据官方说wxss文件和css有点相似，区别和限制。

配置一个Tabbar，一个Tabbar最多是5个，相应的字段需要对其进行配置，提供了图片，点击的关联的页面。选择的图标状态。

"tabBar": {

    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "image/home_h@2x.png",
      "selectedIconPath": "image/home_h@2x.png"
    },
    {
      "pagePath": "pages/logs/logs",
      "iconPath": "image/class_h@2x.png",
      "selectedIconPath": "image/class_h@2x.png",
      "text": "日志"
    },
    {
      "pagePath": "pages/me/me",
      "text": "我的",
      "iconPath": "image/mine_h@2x.png",
      "selectedIconPath": "image/mine_h@2x.png"
    }]
  }

### 使用视图，图片，文本，按钮

<view class = "container2">

    <view class = "panel">
        <label class = "title">请输入查询的内容</label>
        <input class = "inputarea" bindinput="onInput" />
        <button bindtap="onRequest" type="primary" class = "searBtn">查询</button>
    </view>
</view>

### 使用页面

创建Tabbar按钮，需要关联一些页面，页面的命名方式需要保持一致。 

如文件夹为index，里面js wxml 和wxss保持 前缀一样。 

index.js 

index.wxml 

index.wxss 

####切换页面
切换页面的时候，可以在js里面控制一些行为。下面可以看到，通过app来获取用户的基本信息。
onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }

### 数据绑定
通过加载的数据，获取到了用户的基本信息userInfo。通过数据绑定来显示微信的头像和名字。
<view class="container">
  <view  bindtap="bindViewTap" class="userinfo">
    <image class="userinfo-avatar" src="{{userInfo.avatarUrl}}" background-size="cover"></image>
    <text class="userinfo-nickname">{{userInfo.nickName}}</text>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>

### 参考地址 http://blog.csdn.net/hero82748274/article/details/52654469