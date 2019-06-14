import request from './request'

const version = {
    test: 'https://youjutestapi.ixiangzhu.com/cd/',
    office: 'https://youjuapi.ixiangzhu.com/cd/',
}

const URL = (process.env.MODE === 'test') ? version.test : version.office

const api = {
    // get测试
    getIndexData: (r) => request.get('price/badge/8', null, {
        baseURL: URL
    }),
    //post 测试
    getConditions: (paramObj) => request.post('house/conditions', paramObj, {
        baseURL: URL
    }),

}
export default api
