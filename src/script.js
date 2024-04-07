const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



var links = document.getElementsByClassName('seat_selectButton');

    // 각 요소에 클릭 이벤트 리스너를 추가
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            // 'data-url' 속성에서 URL을 가져와 페이지 이동
            window.location.href = this.getAttribute('data-url');
        });
}