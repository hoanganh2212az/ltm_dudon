document.addEventListener('DOMContentLoaded', function() {
    function changeColor(button) {
        var buttons = document.querySelectorAll('.button');
        buttons.forEach(function (btn) {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = '#fff'; // Màu chữ đen cho các nút còn lại
            if (btn === button) {
                btn.style.color = '#000'; // Màu chữ trắng cho nút được chọn
                btn.style.backgroundColor = '#ecb1b1'; // Chọn màu đỏ cho nút được chọn
            }
        });
    }

    function showContent(contentId) {
        var content1 = document.querySelector('.content1');
        var content2 = document.querySelector('.content2');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');

        if (contentId === 'content1') {
            content1.style.display = 'block';
            content2.style.display = 'none';
            button1.classList.add('active');
            button2.classList.remove('active');
            changeColor(button1);
        } else if (contentId === 'content2') {
            content1.style.display = 'none';
            content2.style.display = 'block';
            button1.classList.remove('active');
            button2.classList.add('active');
            changeColor(button2);
        }
    }

    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.addEventListener("click", function() {
        showContent('content1');
    });

    button2.addEventListener("click", function() {
        showContent('content2');
    });

    // Khởi tạo mặc định khi load trang
    showContent('content1');
});
