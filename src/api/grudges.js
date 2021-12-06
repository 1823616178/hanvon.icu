import request from "../utils/request";

/***
 * 请求记仇本列表
 * @returns {AxiosPromise}
 */
export function grudgesList() {
    return request({
        url: "/hanvon/grudges/list",
        method: "POST",
    })
}
