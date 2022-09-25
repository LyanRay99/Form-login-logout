$('.login').on('click', function () {
    let userName = $('#userName');
    let passWord = $('#passWord');
    let getValue_userName = userName.val().split('');
    let getValue_password = passWord.val().split('');
    var check_number = false;
    var check_uppercase = false;
    var check_symbol = true;

    //todo: check xem có class thông báo chưa để tránh hiển thị chống lên nhau
    let checkClass = $('.notification');
    if (checkClass !== null) {
        checkClass.remove();
    }




    if (userName.val() == "" || passWord.val == "") {
        var notification = document.createElement('p');
        notification.setAttribute('class', 'notification');
        $('.section').append(notification);
        notification.innerText = 'Please Login!';
    }
    else {
        // TODO: CHECK USERNAME : check username chứa số, chữ in hoa vaf ký tự đặc biệt ko
        for (let i = 0; i < getValue_userName.length; i++) {
            if (getValue_userName[i] >= 0) {
                check_number = true;
            }
            if (getValue_userName[i] == getValue_userName[i].toUpperCase()) {
                check_uppercase = true;
            }
            if ("`~!@#$%^&*()_=+-/|<>,.{}[]?".includes(getValue_userName[i])) {
                check_symbol = false;
                console.log(check_symbol);
            }
        }
        //todo: Tổng hợp các điều kiện
        if (check_number == true && check_uppercase == true && check_symbol == true) {
            //todo: check password
            check_number = false;
            check_uppercase = false;
            check_symbol = true;
            for (let i = 0; i < getValue_password.length; i++) {
                if (getValue_password[i] >= 0) {
                    check_number = true;
                }
                if (getValue_password[i] == getValue_password[i].toUpperCase()) {
                    check_uppercase = true;
                }
                if ("`~!@#$%^&*()_=+-/|<>,.{}[]?".includes(getValue_password[i])) {
                    check_symbol = false;
                    console.log(check_symbol);
                }
            }
            if (check_number == true && check_uppercase == true && check_symbol == true) {
                //todo: check độ dài
                if (getValue_userName.length < 5 || getValue_userName.length > 10) {
                    var notification = document.createElement('p');
                    notification.setAttribute('class', 'notification');
                    $('.section').append(notification);
                    notification.innerText = 'Độ dài Username phải từ 5 đến 10';
                }
                else if (getValue_password.length < 5 || getValue_password.length > 10) {
                    var notification = document.createElement('p');
                    notification.setAttribute('class', 'notification');
                    $('.section').append(notification);
                    notification.innerText = 'Độ dài Passwork phải từ 5 đến 10';
                    console.log('checkpassword');
                }
                else {
                    $('.modal').css('display', 'block');
                }
            }
            else {
                var notification = document.createElement('p');
                notification.setAttribute('class', 'notification');
                $('.section').append(notification);
                notification.innerText = 'Password ko đúng';
            }

        }
        else {
            var notification = document.createElement('p');
            notification.setAttribute('class', 'notification');
            $('.section').append(notification);
            notification.innerText = 'Username ko đúng';
        }
    }


});

$('.logout').css('display', 'none');

$('.success__login__icon').on('click', function () {
    $('.modal').css('display', 'none');
    $('.logout').css('display', 'inline-block');
});

