$(function(){
    $('.login').on('click', function(){
        $('.register-box').hide();
        $('.login-box').show()
    })

    $('.reg').on('click', function(){
        $('.login-box').hide();
        $('.register-box').show()
    })

    const form = layui.form;
    const layer = layui.layer;

    form.verify({
        password: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ],
      repassword: function(value) {
        const val = $('.layui-input[name=password]').val()
        if(val !== value) {
            return '两次密码不一致'
        }
      }  
    })

    $('.register-form').on('submit', function(e) {
        e.preventDefault();
        const usernameDom = $('.register-form [name=username]');
        const passwordDom = $('.register-form [name=password]');
        $.post('/api/reguser',
            {
                username: usernameDom.val(),
                password: passwordDom.val()
            },
            function(res) {
                layer.msg(res.message);
                if (res.status ===0) {
                    usernameDom.val('')
                    passwordDom.val('')
                    $(".login").trigger("click")
                }
               
            })
    })

    $('.login-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: '/api/login',
            data: $(this).serialize(),
            method: 'post',
            success: function(res) {
                layer.msg(res.message);
                if (res.status ===0) {
                    localStorage.setItem('token', res.token);
                    location.href = '/index.html';
                }
                
            }
        })
    })
})