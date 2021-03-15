$(function() {
    getUserInfo();
})

function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        method: 'get',
        success: function(res) {
            if(res.status !==0) {
                return layui.layer.msg(res.message);
            }
            
            renderAvatar(res.data)
        }
    })
}

function renderAvatar({nickname, username, user_pic}) {
    const name = nickname || username;
    $('#welcome').html('欢迎 ' + name)
    if(user_pic) {
        $('.layui-nav-img')
        .attr('src', user_pic)
        .show()

        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()

        $('.text-avatar')
        .html(name[0].toUpperCase())
        .show()
    }
}