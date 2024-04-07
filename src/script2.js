// DOM 요소 선택
const container = document.querySelector('.container'); // '.container' 클래스를 가진 요소 선택
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // 예약되지 않은 모든 좌석을 선택
const count = document.getElementById('count'); // 사용자가 선택한 좌석 수를 표시할 요소 선택
const total = document.getElementById('total'); // 전체 티켓 가격을 표시할 요소 선택
const movieSelect = document.getElementById('movie'); // 영화 선택 드롭다운 선택

populateUI(); // 페이지 로딩 시 localStorage에서 저장된 선택 사항을 UI에 반영

let ticketPrice = +movieSelect.value; // 선택된 영화의 가격. '+' 기호는 문자열을 숫자로 변환

// 영화 인덱스와 가격을 localStorage에 저장
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// 선택된 좌석 수와 총 티켓 가격을 업데이트
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected'); // 선택된 모든 좌석을 선택

  // 선택된 좌석의 인덱스를 배열로 변환하여 저장
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length; // 선택된 좌석 수

  count.innerText = selectedSeatsCount; // 화면에 선택된 좌석 수 표시
  total.innerText = selectedSeatsCount * ticketPrice; // 화면에 총 가격 표시
}

// localStorage에서 데이터를 불러와 UI를 업데이트
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); // 선택된 좌석 정보를 불러옴

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected'); // 저장된 선택된 좌석을 UI에 표시
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex'); // 선택된 영화 인덱스를 불러옴

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex; // 영화 선택 드롭다운을 업데이트
  }
}

// 영화 선택 이벤트 핸들러
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value; // 영화가 바뀌면 티켓 가격 업데이트
  setMovieData(e.target.selectedIndex, e.target.value); // 선택된 영화 데이터 저장
  updateSelectedCount(); // 선택된 좌석 수와 총 가격 업데이트
});

// 좌석 클릭 이벤트 핸들러
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') && // 클릭된 요소가 좌석이고
    !e.target.classList.contains('occupied') // 이미 예약된 좌석이 아니라면
  ) {
    e.target.classList.toggle('selected'); // 선택 상태를 토글

    updateSelectedCount(); // 선택된 좌석 수와 총 가격 업데이트
  }
});

// 초기 선택된 좌석 수와 총 가격 설정
updateSelectedCount();




document.addEventListener('DOMContentLoaded', () => {
  const movieSelect = document.getElementById('movie'); // 드롭다운 선택
  const moviePoster = document.getElementById('moviePoster'); // 포스터 이미지 태그 선택

  const moviePosters = {
    '12': '../img/johnwick4.png',
    '11': '../img/bat man.png',
    '10': '../img/the house that jack built.png',
    '8': '../img/kikis delivery service.png',
    // 각 영화에 해당하는 포스터 이미지 경로
  };


movieSelect.addEventListener('change', () => {
    const selectedValue = movieSelect.value; // 선택된 영화의 value
    const posterPath = moviePosters[selectedValue]; // 영화 value에 해당하는 포스터 경로

    if (posterPath) {
      moviePoster.src = posterPath; // 포스터 이미지 경로 업데이트
      moviePoster.style.display = 'block'; // 포스터 이미지 표시
    } else {
      moviePoster.style.display = 'none'; // 유효하지 않은 선택이면 포스터 숨김
    }
  });
});