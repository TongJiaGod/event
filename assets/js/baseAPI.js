$.ajaxPrefilter(function(options){
    const baseUrl = 'http://ajax.frontend.itheima.net'
    console.log(options);
    options.url = baseUrl + options.url
    // options.header.Authorization = localStorage.getItem('token')
    console.log(options.url);
})