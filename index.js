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
  { "number": 5, "message": "너를 좋아할수록 자꾸 욕심부리게 돼. 너에게 유일하고 싶고, 제일 의미있고 싶고, 너를 설명하는 가장 중요한 단어가 되고 싶어. 안정형을 향해 노력하고는 있지만 사람이라면 누구나 부족한 부분이 있는거잖아? 각자에게는 툭 튀어나온 모난 조각이 서로에게는 빈자리에 딱 맞는 하나의 퍼즐 조각인, 그런 게 인연이 아닐까 해. 그러니까.. 때로는 내 욕심이 너한테는 즐거움일 수 있었으면 좋겠다는 말을 하려고 글이 길어졌어.. :)" },
  { "number": 6, "message": "너랑 서로 바라보고 있으면 세상이 온통 영화같아. 짙은 행복은 이런걸까? 그러다 네가 경계없이 웃으면 나도 무력하게 웃게 돼. 그런 단어들 있잖아-영화, 소설, 여름, 음악처럼 사랑이라는 단어보다 가끔은 더 사랑같은 단어들. 너는 유독 그런 단어들이 잘 어울리는 것 같아. 오랜 시간 고민한 마음이니까 더 오랜 시간동안 깊어지면 좋겠다. 나는 너에게 오래 기쁜 선물이고 싶어." },
  { "number": 7, "message": "좋은 것들은 목청 큰 불행들 사이에 가냘프게 끼어온다는 문장을 읽은 적이 있어. 아무래도 올해가 나한테 그런 해인걸까? 나도, 너에게 이해받아 훨씬 덜 외로운 한 해였어. 그치만 네가 나의 모든 상징을 이해하지는 못했으면 좋겠다고 가끔 생각해. 좋은 것만 주고 좋은 면만 보여줄 수 없어 아쉽다. 그치만 우리가 떨어져있지 않으면 불가능한거니까, 그건 포기할래 ㅎㅎ" },
  { "number": 8, "message": "가끔은 우리가 정말 많이 닮았다는 생각을 해. 너의 모습을 보면서 나를 보고, 그래서 어쩌면 너를 사랑하는 건 나를 더 사랑해가는 과정인 것 같기도 해. 나도 나를 어쩔줄 모르니까 네가 그만큼 어렵지만, 또 그만큼 너를 이해하고, 더 사랑하는 것 같아. 우리도 아마 깊은 곳에서는 스스로를 안쓰러워하고 사랑하고있지 않을까? 그러니까 너를 알아갈수록 네가 좋다는 건 정말로 진심이야. 그러니까, 혹시 어느 날 힘들더라도 놓지말고 꼭 잡고있어줘. 나도 너를 잘 잡고 있을게. 그렇게 시간이 흐르면 우리 스스로를 정말로 사랑하게 될지도 모르잖아."},
  { "number": 9, "message": "선하야, 안녕. 오늘은 어땠어? 나는 요즘 매일 너를 더 사랑하는 기분인데, 그게 끝없이 올라가고 있어서 낯설고 신기해. 그리고 편지를 쓸 때마다 너에 대한 감정을 표현하는 게 생각보다 어려워. 기억도 나지 않을만큼 어렸을 때 느꼈던, 온전히 순수한 사랑과 애정이 이런 느낌이었을까? 강아지가 사람을 좋아하는게 이런 느낌인걸까? 뭔가 마음 아주 깊은 곳에서 따뜻한 느낌이 올라오는데, 한 번도 경험한 적 없는 느낌이면서도 아무런 장벽없이 받아들이게 돼. 네가 웃으면 온 세상이 밝아지고 알록달록해져. 다른 누군가를 이 이상 사랑할 수 있을 것 같지 않아. 살면서 하나의 사랑을 찾아야한다면 이런 감정일 것 같아. 사랑해, 선하야. " },
  { "number": 10, "message": "언젠가 따뜻한 날씨의 나라에서, 해질녁이 예쁜 날 너랑 야외 테라스가 있는 식당에 앉아 맛있는 음식을 먹고 도란도란 이야기하고싶어. 시원한 날씨의 나라에서 멋진 호수 눈덮인 산과 함께하는 식사도 좋아. 식사가 끝나면 손잡고 나란히 집에 돌아가자. 좋아하는 노래를 듣고 따뜻한 차를 마신 다음 같이 꼭 껴안고 잠에 드는거야. 네 동의도 없이, 요즘 툭하면 내 상상에 너를 데려오게 돼. 세상의 예쁜 것들, 멋진 것들, 흥미로운 것들을 같이 보고 듣고 경험하고 싶어. 그러니까 너도 자꾸 상상해봐. 진짜 현실이 될 수도 있어!" },
  { "number": 11, "message": "살면서 이렇게 쉽게 자주 행복한 건 처음인 것 같아. 너랑 있으면 너무 자주 행복해서 나도 너를 행복하게 해주고 싶어. 네가 사랑스럽고 좋아서 가끔 내가 마음을 너무 쏟아내게 되나봐. 잘 담아뒀다가 들뜬 마음은 가라앉히고 맑은 마음만 줘야지. 혼자서도 잘 걷는 어른이 될게. 하지만 그래도 우리 쭉 같이 걷는 사이가 되자. " },
  { "number": 12, "message": "너는 예쁘고 사랑스러워. 생각하는 것들, 느끼는 것들도 예쁘고, 무언가를 사랑하는 마음도 예뻐. 좋은 사람이 되기 위해 노력하는 너를 본받고 싶고, 멋지다고 생각해. 네가 너무 사랑스러워서 왠지 너를 생각하면 새롭고 재미있는 걸 뭐든 할 수 있을 것만 같아. 너의 이야기를 듣고 우리가 서로 생각을 나누는 시간이 즐거워. 나는 행복에 대해 늘 고민하면서 살아왔는데 너랑 있으면 고민할 새도 없이 행복이 너무 쉽게 느껴져. 너한테 내 모든 삶이 위로받는 기분이야. 운명같은 거 시덥잖은 소리라고 생각했지만 요즘엔 조금 더 믿게 됐어." },
  { "number": 13, "message": "22일12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
  { "number": 14, "message": "블시에서 크리스마스 파티하는 날! 슬쩍 보는 게 내가 할 수 있는 대부분이지만 그래도 네가 있어서 늘 응원과 위안이 돼. 아쉽고 답답한 때가 있더라도 너는 응원해주면 좋겠다. 오늘은 이기적인 말을 써봤어.. 오늘 재밌게 시간 보내고 같이 집에 가서 오붓하게 쉬자 ㅎㅎ" },
  { "number": 15, "message": "여행을 떠나는 날이야! 즐겁고 안전히 다녀오자. 눈 덮인 산에 대해 생각해본 건 올해가 처음이지만 아마 나도 좋아하게 될 것 같아. 이미 그렇게 된 것 같기도 해. 네가 좋아하는 것들과 너에게 소중한 것들은 곧잘 나에게도 그렇게 되니까. 그리고 이건 비밀인데, 너랑 있으면 매일이 아주 근사한 여행같아." },
  { "number": 16, "message": "메리 크리스마스! 이번 크리스마스는 어때? 충분히 행복했어? 그랬다면 너무 좋고, 조금 아쉬움이 남았다면 더 행복한 크리스마스도 있을거란 뜻이니까 더 좋아! 이제 다음 크리스마스까지 364일 남았네 :) 그 사이에 많은 날들도 기쁘고 축복일거야. 더 많은 날들이 그럴 수 있게 만들게. 사랑해, 선하야" },
  { "number": 17, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 18, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
  { "number": 19, "message": "12월, 모두에게 기쁨과 행복이 넘치는 달이에요." }
];
