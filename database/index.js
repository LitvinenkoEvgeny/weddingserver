module.exports = {
  namedata: {
    name: 'Сергей',
    lastname: 'Абрамов',
    fullName: 'Сергей Абрамов',
    fullNameViceVersa: 'Абрамов Сергей'
  },

  city: 'Волгоград',

  corp: {
    firstPageImg: '/corporate/back.jpg',
    videoPoster: '/images/img/corp-video-back.jpg',
    video: '/corporate/video.webm',
    aboutMePhotos: [
      'https://pp.vk.me/c631519/v631519329/4e8e4/9ljsghHG9IY.jpg',
      'https://pp.vk.me/c615721/v615721329/e4e/65vEbfTiV7I.jpg'
    ],
    eventsItems: [
      {
        id: 1,
        active: true,
        eventName: 'Новогодние банкеты',
        description: 'Для многих новый год - это не только семейный праздник, но и одна из немногих возможностей собраться с рабочим коллективом в неформальной обстановке.',
        titleImg: '/album/corp1/1.jpg',
        date: '15 августа 2016',
        linkToOtherImgs: '1',
        photos: ['/album/corp1/1.jpg', '/album/corp1/2.jpg', '/album/corp1/3.jpg']
      },
      {
        id: 2,
        eventName: 'Презентации и открытия',
        description: 'Острый и уместный юмор, грамотная, поставленная речь и множество креативных идей ‒ вот лично мои 3 составляющих успеха подобных событий.',
        titleImg: '/album/corp2/5.jpg',
        date: '4 сентября 2016',
        linkToOtherImgs: '2',
        photos: ['https://pp.vk.me/c626523/v626523329/21f9f/cxoT2p0sDys.jpg', 'https://pp.vk.me/c637218/v637218329/48a0/5PCyz551pW0.jpg', 'https://pp.vk.me/c631225/v631225329/40970/Z17tM6BRl4w.jpg']
      },
      {
        id: 3,
        eventName: 'Team-building',
        description: 'Обожаю наблюдать как сплочаются коллективы и принимать в этом участие. Будь то простая спартакиада или огромный командообразующий квест.',
        titleImg: '/album/corp3/3.jpg',
        date: '27 ноября 2016',
        linkToOtherImgs: '3'
      }
    ],
    reviewsLink: 'https://vk.com/prazdniknnpro',
    clients: [
      {
        id: 1,
        clientName: 'РГУТиС',
        text: 'Отлично провел масленичные гулянья. Большое открытое мероприятие прошло на очень высоком уровне....',
        img: '/clients/44/medium/logo1.jpg@1471261752'

      },
      {
        id: 2,
        clientName: 'РГУТиС',
        text: 'Отлично провел масленичные гулянья. Большое открытое мероприятие прошло на очень высоком уровне....',
        img: '/clients/44/medium/logo1.jpg@1471261752'

      },
      {
        id: 3,
        clientName: 'Название фирмы',
        text: 'Коллектив ОАО "СамРЭК" и я лично выражаем огромную благодарность Вам Денис, за проведение нашего мероприятия...',
        img: '/clients/47/medium/logo4.jpg@1471261844'

      },
      {
        id: 4,
        clientName: 'Название фирмы',
        text: 'отзыв 2',
        img: '/clients/44/medium/logo1.jpg@1471261752'
      },
    ],
    reviewsPhotoBlock: {
      photoLink: 'https://pp.vk.me/c630829/v630829329/26309/z_If3iDbCiU.jpg',
      imgSettings: {
        position: 'center center',
        backgroundColor: '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
      header: 'Они доверили мне свое событие',
      subtitle: ' ... и не пожалели!',
      text: 'Это не полный список моих клиентов, и он постоянно пополняется.'
    },
    contactsPageImg: '/corporate/back.jpg'
  }

}
