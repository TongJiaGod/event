$.ajaxPrefilter(function(options){
    const baseUrl = 'http://ajax.frontend.itheima.net'
    options.url = baseUrl + options.url
    console.log(options.url);
})