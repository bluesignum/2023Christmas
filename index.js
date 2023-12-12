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
  { "number": 3, "message": "특별함은 만들면 생기는 게 아닐까? 의미를 한 번 붙이고 나면, 갈수록 이것저것 더해져서 더 커다래지는 것 같아. 너와 보내는 시간에는 특별한 이름표들을 붙이고 싶어. 자꾸 특별한 감정과 의미가 더해지고 더해져서 더 이상 원래의 객관성따위는 보이지도 않고 남은 건 사랑뿐이면 좋겠어."},
  { "number": 4, "message": "이걸 만드는 건 오랜만에 새로운 일이었어. 해보고 싶은게 되게 많았고 지금도 많은데 항상 블시의 일이 가득차서 미뤄둬왔거든. 덕분에 새로운 거 하느라 밤새면서도 즐거웠어! 너는 나를 아주 쉽게 움직이는데, 그게 나는 기쁘고 즐거워. 앞으로 언제든 그걸 이용해도 좋아. 내가 그걸 이용하는 것 같지만.." },
  { "number": 5, "message": "14각자의 작은 행복이 모여 만드는 특별한 24일!" },
  { "number": 6, "message": "나는 한번씩 삶과 죽음 사이에서 갈등하곤 해. 글이 더 담담하지 않을까해서 이걸로 적어봐. 하지만 네가 있을 때 나는 훨씬 더 삶의 안쪽에 놓여있어. 그러니 불안해하거나 걱정하지는 말고, 한번씩 옆에서 안아주면 충분해." },
  { "number": 7, "message": "16함께 하는 즐거움, 24일 동안 계속되길 바랍니다." },
  { "number": 8, "message": "172월은 행복한 순간들이 가득한 달이에요." },
  { "number": 9, "message": "18우리 모두에게 찾아온 특별한 행복의 계절!" },
  { "number": 10, "message": "19매일 매일이 행복으로 가득찬 24일이 되길." },
  { "number": 11, "message": "2012월, 행복이 가득한 당신과 나누는 소중한 시간." },
  { "number": 12, "message": "좋은 것들은 목청 큰 불행들 사이에 갸냘프게 끼어온다는 문장을 읽은 적이 있어. 아무래도 올해가 나한테 그런 해인걸까? 네가 있어서21다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요." },
  { "number": 13, "message": "블시에서 크리스마스 파티하는 날! 슬쩍 보는 게 내가 할 수 있는 대부분이지만 그래도 네가 있어서 늘 위안이 돼. 아쉽고 답답한 일이 생기더라도 너는 응원해주면 좋겠다. 오늘은 이기적인 말을 써봤어 :) " },
  { "number": 14, "message": "23일" },
  { "number": 15, "message": "여행을 떠나는 날이야! 즐겁고 안전히 다녀오자. 눈 덮인 산에 대해 올해 처음 생각해봤지만 아마 나도 좋아하게 될 것 같아. 이미 그렇게 된 것 같기도 해. 비밀인데, 너랑 있으면 매일이 아주 근사한 여행같아. 사랑해, 선하야" },
  { "number": 16, "message": "메리 크리스마스! 이제 다음 크리스마스까지 364일 남았다 :) 그 사이에 많은 날들도 기쁘고 축복일거야. 더 많은 날들이 그럴 수 있게 만들게. 사랑해, 선하야" },
  { "number": 17, "message": "모두에게 행복한 24일이 될 것을 기대합니다!" },
  { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
  { "number": 19, "message": "다양한 행복이 모여 하나로 뭉쳐지는 24일!" },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
  { "number": 24, "message": "여행을 떠나는 날이야! 즐겁고 안전히 다녀오자. 눈 덮인 산에 대해 올해 처음 생각해봤지만 아마 나도 좋아하게 될 것 같아. 이미 그렇게 된 것 같기도 해. 비밀인데, 너랑 있으면 매일이 아주 근사한 여행같아. 사랑해, 선하야"}
  { "number": 25, "message": "메리 크리스마스! 이제 다음 크리스마스까지 364일 남았다 :) 그 사이에 많은 날들도 기쁘고 축복일거야. 더 많은 날들이 그럴 수 있게 만들게. 사랑해, 선하야" }
];
