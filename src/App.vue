<script>
    export default {
        onLaunch() {
            // 获取小程序更新机制兼容
            if (wx.canIUse('getUpdateManager')) {
                const updateManager = wx.getUpdateManager()
                updateManager.onCheckForUpdate(function (res) {
                    // 请求完新版本信息的回调
                    if (res.hasUpdate) {
                        updateManager.onUpdateReady(function () {
                            wx.showModal({
                                title: '更新提示',
                                content: '新版本已经准备好，是否重启应用？',
                                success: function (res) {
                                    if (res.confirm) {
                                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                        updateManager.applyUpdate()
                                    }
                                }
                            })
                        })
                        updateManager.onUpdateFailed(function (err) {
                            // 新的版本下载失败
                            wx.showModal({
                                title: '已经有新版本了哟~',
                                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
                            })
                        })
                    }
                })
            } else {
                // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                wx.showModal({
                    title: '提示',
                    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                })
            }
        },
        created() {
            // 调用API从本地缓存中获取数据
            /*
             * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
             * 微信：mpvue === wx, mpvuePlatform === 'wx'
             * 头条：mpvue === tt, mpvuePlatform === 'tt'
             * 百度：mpvue === swan, mpvuePlatform === 'swan'
             * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
             */

            let logs
            if (mpvuePlatform === 'my') {
                logs = mpvue.getStorageSync({key: 'logs'}).data || []
                logs.unshift(Date.now())
                mpvue.setStorageSync({
                    key: 'logs',
                    data: logs
                })
            } else {
                logs = mpvue.getStorageSync('logs') || []
                logs.unshift(Date.now())
                mpvue.setStorageSync('logs', logs)
            }
            let ls = this.$ls
            // 获取系统配置
            wx.getSystemInfo({
                success: e => {
                    let custom = wx.getMenuButtonBoundingClientRect()
                    let systeminfo = {
                        StatusBar: e.statusBarHeight,
                        Custom: custom,
                        CustomBar: custom.bottom + custom.top - e.statusBarHeight
                    }
                    ls.setItem('systeminfo', systeminfo)
                },
            })
        },
        log() {
            console.log(`log at:${Date.now()}`)
        },

    }
</script>
<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 100px 0;
        box-sizing: border-box;
    }

    /* this rule will be remove */
    * {
        transition: width 2s;
        -moz-transition: width 2s;
        -webkit-transition: width 2s;
        -o-transition: width 2s;
    }
    .scrollPage {
        height: 100vh;
    }

    .nav-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0px 40rpx 0px;
        justify-content: space-between;
    }

    .nav-li {
        padding: 30rpx;
        border-radius: 12rpx;
        width: 45%;
        margin: 0 2.5% 40rpx;
        background-image: url(https://image.weilanwl.com/color2.0/cardBg.png);
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 1;
    }

    .nav-li::after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: inherit;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -10%;
        border-radius: 10rpx;
        opacity: 0.2;
        transform: scale(0.9, 0.9);
    }

    .nav-li.cur {
        color: #fff;
        background: rgb(94, 185, 94);
        box-shadow: 4rpx 4rpx 6rpx rgba(94, 185, 94, 0.4);
    }

    .nav-title {
        font-size: 32rpx;
        font-weight: 300;
    }

    .nav-title::first-letter {
        font-size: 40rpx;
        margin-right: 4rpx;
    }

    .nav-name {
        font-size: 28rpx;
        text-transform: Capitalize;
        margin-top: 20rpx;
        position: relative;
    }

    .nav-name::before {
        content: "";
        position: absolute;
        display: block;
        width: 40rpx;
        height: 6rpx;
        background: #fff;
        bottom: 0;
        right: 0;
        opacity: 0.5;
    }

    .nav-name::after {
        content: "";
        position: absolute;
        display: block;
        width: 100rpx;
        height: 1px;
        background: #fff;
        bottom: 0;
        right: 40rpx;
        opacity: 0.3;
    }

    .nav-name::first-letter {
        font-weight: bold;
        font-size: 36rpx;
        margin-right: 1px;
    }

    .nav-li text {
        position: absolute;
        right: 30rpx;
        top: 30rpx;
        font-size: 52rpx;
        width: 60rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
    }

    .text-light {
        font-weight: 300;
    }

</style>
