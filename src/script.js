// 'linkClass' 클래스를 가진 모든 요소를 선택
var links = document.getElementsByClassName('seat_selectButton');


for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {

        window.location.href = this.getAttribute('data-url');
    });
}