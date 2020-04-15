import axios from 'axios';
import AxiosMock from 'axios-mock-adapter';
const mockXHR = new AxiosMock(axios,{
    delayResponse: 350
})

const URLs = {
    "transfer": "transfer"
}

if(process.env.NODE_ENV === 'production'){
    mockXHR.restore();
}
else if(process.env.NODE_ENV === 'development'){
    mockXHR.onPost(URLs.transfer).reply(config => {
        console.log(config)
        return [200, {}]
    })
}

class XHR {
    constructor(){
        this.localHostInstance = axios.create({
            baseURL: '/api/v1',
            timeout: 15000,
            withCredentials: true
        })
    }

    createTransfer = (params) => {
        return this.localHostInstance.post(URLs.transfer,params)
    }
}

export default new XHR();