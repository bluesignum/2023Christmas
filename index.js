// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '120px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "선하야, 안녕! 이걸 너한테 공개하는 순간이 오다니! 벌써 전에 블시에서 받았던 폰트.. 이미지.. 색상.. 피드백들이 스쳐지나가면서 약간 두렵다☆ 내가 봐도 아쉬운 부분이 많지만 정성과 사랑으로 예쁘게 봐주면 좋겠어ㅋㅋㅋㅋ! 10일에 주려고 했지만 조금 늦어서 12일이 됐네 ㅠ 그치만 3일만큼을 한꺼번에 볼 수 있으니까!ㅎㅎ 앞으로 남은 날들도 한번씩 들어와줘 :)"},
  { "number": 2, "message": "이건 매일 너에게 주는 선물이라는 생각으로 만들었어. 생각해보면 매일 새로운 날들이 시작되는데, 실제로 그렇게 두근두근하게 느끼기는 쉽지 않은 것 같아. 크리스마스를 핑계로 보름정도는 매일이 네게 기대되고 선물같은 하루라면 좋겠다." },
  { "number": 3, "message": "특별함은 만들면 생기는 게 아닐까? 의미를 한 번 붙이고 나면, 갈수록 이것저것 더해져서 더 커다래지는 것 같아. 너와 보내는 시간에는 특별한 이름표들을 붙이고 싶어. 자꾸 특별한 감정과 의미가 더해지고 더해져서 더 이상 원래의 객관성따위는 보이지도 않고 남은 건 사랑뿐이면 좋겠어." },
  { "number": 4, "message": "이걸 만드는 건 오랜만에 새로운 일이었어. 해보고 싶은게 되게 많았고 지금도 많은데 항상 블시의 일이 가득차서 미뤄둬왔거든. 덕분에 새로운 거 하느라 밤새면서도 즐거웠어! 너는 나를 아주 쉽게 움직이는데, 그게 나는 기쁘고 즐거워. 앞으로 언제든 그걸 이용해도 좋아. 내가 그걸 이용하는 것 같지만.." },
  { "number": 5, "message": "14일짙은 행복은 이런걸까? 네가 경계없이 웃을 때 나도 무력하게 웃게 돼." },
  { "number": 6, "message": "15일" },
  { "number": 7, "message": "16일함께 하는 즐거움, 24일 동일다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요." },
  { "number": 13, "message": "행복의 파도가 모두에게 찾아오는 특별한 24일!" },
  { "number": 14, "message": "12월, 각자의 작은 행복이 모여 큰 기쁨이 되길." },
  { "number": 15, "message": "모두에게 행복이 넘치는 24일을 기대해봐요." },
  { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
  { "number": 17, "message": "모두에게 행복한 24일이 될 것을 기대합니다!" },
  { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
  { "number": 19, "message": "다양한 행복이 모여 하나로 뭉쳐지는 24일!" },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
  { "number": 24, "message": "12월, 모두에게 기쁨과 행복이 넘치는 달이에요." }
];
