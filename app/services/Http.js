import axios from 'axios'
import PubSub from './PubSub'

import {SERVER_URL} from '../services/config'

var token = "";

function createAxios() {
    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            "token": null
            //            'Authorization':"Bearer "+token
        },

        validateStatus: function (status) {
            return true
        },
    })
}

function request(method, url, data) {
    PubSub.emit("ajax:started");
    return createAxios()({
        method: method,
        url: url,
        data: data
    }).then(function (r) {
        PubSub.emit("ajax:finished")
        return r
    })
}

const Http = {
    post(url, data) {
        return request('post', url, data);
    },
    get(url) {
        return request('get', url)
    },
    put(url, data) {
        return request('put', url, data)
    },

    delete(url, data) {
        return request('delete', url, data)
    },

    patch(url, data) {
        return request('patch', url, data)
    },

    getBaseUrl() {
        return SERVER_URL
    }
}

export default Http