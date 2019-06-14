const version = {
	test: 'https://youjutestapi.ixiangzhu.com/cd/',
    office: 'https://youjuapi.ixiangzhu.com/cd/',
}

const URL = version[process.env.MODE]

const http = {
	get(options) {
		if (!options.type) {
			wx.showLoading({
				title: '加载中', //数据请求前loading，提高用户体验
			})
		}
		return new Promise((resolve, reject) => {
			wx.request({
				url: URL + options.url,
				data: options.data || {},
				method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
				header: {
					'Content-Type': 'application/json'
				},
				success: function(res) {
					if (res.statusCode != 200) {
						wx.showToast({
							title: "网络出错，稍后再试",
							icon: "none"
						});
						return false;
					}
					resolve(res.data);
				},
				fail: function(error) {
					reject(error); //请求失败
				},
				complete: function() {
					if (!options.type) {
						wx.hideLoading();
					}
				}
			})
		})
	},
	post(options) {
		if (!options.type) {
			wx.showLoading({
				title: '加载中', //数据请求前loading，提高用户体验
			})
		}
		return new Promise((resolve, reject) => {
			wx.request({
				url: URL + options.url,
				data: options.data || {},
				method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
				header: {
					'Content-Type': 'application/json'
				},
				success: function(res) {
					resolve(res.data);
				},
				fail: function(error) {
					reject(error);
				},
				complete: function() {
					if (!options.type) {
						wx.hideLoading();
					}
				}
			})
		})
	}
}

export default http;
