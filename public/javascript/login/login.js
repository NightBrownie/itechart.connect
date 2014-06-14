'use strict';

$(function () {
        $('.submit-login').click(function () {
            var params = $('#login-form').serialize();
            $.post('/login', params, function(){
                window.location.href = '/';
            }).fail(
            function(){
                alert('Login Error');
            });
        });
    }
);
