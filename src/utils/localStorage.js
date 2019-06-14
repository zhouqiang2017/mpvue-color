export default {
    setItem(name, value) {
        wx.setStorageSync(name, JSON.stringify(value))
    },
    getItem(name) {
        try {
            return JSON.parse(wx.getStorageSync(name))
        } catch (e) {
            return null
        }
    },
    removeItem(name) {
        wx.removeStorageSync(name)
    }
}
