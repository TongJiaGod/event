$.ajaxPrefilter(function(options){
    const baseUrl = 'http://ajax.frontend.itheima.net'
    options.headers =  {
        Authorization: options.url.startsWith('/my') ? localStorage.getItem('token') : ''
    }

    options.url = baseUrl + options.url

    options.complete = function(res) {
        const { status, message } = res.responseJSON;
        if(status ===1&&message === '身份认证失败') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }
})