// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//이미지를 뿌려줄 공간의 id를 querySelctor로 지정
const container = document.querySelector("#container");

//마지막의 번호에 따라 다양한 포켓몬 이미지를 불러오는 api
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  //생성한 div 태그에 "pokemon"이라는 클래스 추가 (CSS에서 추가한 div 설정 추가 위함)
  pokemon.classList.add("pokemon");

  //번호를 입력할 span 태그 생성
  const label = document.createElement("span");
  //번호 입력
  label.innerText = `#${i}`;

  //빈 이미지 태그 생성해서 newImg라는 변수에 삽입
  const newImg = document.createElement("img");
  //빈 이미지 태그에 api 이용해서 포켓몬 이미지 주소 속성 삽입
  newImg.src = `${baseURL}${i}.png`;

  //pokemon이라는 class의 div에 api 주소 삽입된 newImg 추가
  pokemon.appendChild(newImg);
  //pokemon이라는 class의 div에 번호 추가
  pokemon.appendChild(label);

  //container 영역에 포켓몬 이미지 삽입된 div 추가
  container.appendChild(pokemon);
}
