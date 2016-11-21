module.exports = {
  namedata: {
    name: 'Сергей',
    lastname: 'Абрамов',
    fullName: 'Сергей Абрамов',
    fullNameViceVersa: 'Абрамов Сергей'
  },

  phone: {
    full: '+7 (920) 033-67-97',
    code: '+7',
    operator: '(920)',
    rest: '033-67-97'
  },

  mainInfo: {
    since: 'Ведущий мероприятий с 2008 года'
  },

  vkGroup: 'https://vk.com/prazdniknnpro',

  socialButtons: [
    {
      class: 'vk',
      title: 'Паблик ВКонтакте',
      link: '#',
      img: '/social/vk.svg'
    },
    {
      class: 'tw',
      title: 'Твиттер',
      link: '#',
      img: '/social/tw.svg'
    },
    {
      class: 'insta',
      title: 'Фоточки в инстаграме',
      link: '#',
      img: '/social/insta.svg'
    },
    {
      class: 'fb',
      title: 'Страничка на фэйсбуке',
      link: '#',
      img: '/social/fb.svg'
    },
  ],

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
    calendarEvents: [
        // дата в формате день-месяц-год
      {
        date: '22-10-2016',
        name: 'корпоратив фирмы рога и копыта'
      },
      {
        date: '12-11-2016',
        name: 'корпоратив фирмы рога и копыта'
      },
      {
        date: '19-11-2016',
        name: 'корпоратив фирмы brassers'
      },
      {
        date: '01-12-2016',
        name: 'корпоратив фирмы brassers'
      },
      {
        date: '03-01-2017',
        name: 'корпоратив фирмы brassers'
      }
    ],
    contactsPageImg: '/corporate/back.jpg'
  },

  wedding: {
    aboutMePhotos: [
      'https://pp.vk.me/c631519/v631519329/4e8e4/9ljsghHG9IY.jpg',
      'https://pp.vk.me/c615721/v615721329/e4e/65vEbfTiV7I.jpg'
    ],
    eventsItems: [
      {
        id: 1,
        active: true,
        eventName: 'ДВА СЕРДЦА',
        description: 'Ваш комментарий',
        titleImg: '/album/1/6.jpg',
        people: '50',
        place: 'Ресторан «Петровский»',
        date: '15 августа 2016',
        linkToOtherImgs: '1',
        photos: ['/album/1/1.jpg', '/album/1/2.jpg', '/album/1/3.jpg']
      },
      {
        id: 2,
        eventName: 'Свадьба в лагуне',
        description: 'Ваш комментарий',
        titleImg: '/album/2/8.jpg',
        people: '45',
        place: 'ГК Русская Охота',
        date: '18 июня 2016',
        linkToOtherImgs: '2',
        photos: ['/album/2/1.jpg', '/album/2/2.jpg', '/album/2/3.jpg',
          '/album/2/4.jpg', '/album/2/5.jpg', '/album/2/6.jpg',
          '/album/2/7.jpg'
        ]
      },
      {
        id: 3,
        eventName: 'Свадьба "Ретро"',
        description: 'your comment',
        titleImg: 'album/3/2.jpg',
        people: '30',
        place: 'ГК Русская Охота',
        date: '25 июня 2016',
        linkToOtherImgs: '3',
        photos: ['album/3/1.jpg', 'album/3/2.jpg', 'album/3/3.jpg', 'album/3/4.jpg']
      },
    ],

    reviewsByYear: {
      2014: [
        {
          id: 1,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2014'
        },
        {
          id: 2,
          previewImg: 'reviews/2/2.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2014'
        },
        {
          id: 3,
          previewImg: 'reviews/3/3.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2014'
        },
        {
          id: 4,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2014'
        },
        {
          id: 5,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2014'
        },
        {
          id: 6,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'тестовый комментарий с сервера ( не забыть запилить валидацию)',
          date: '06 сентября 2014'
        }
      ],
      2015: [
        {
          id: 7,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        },
        {
          id: 8,
          previewImg: 'reviews/2/2.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        },
        {
          id: 9,
          previewImg: 'reviews/3/3.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        },
        {
          id: 10,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        },
        {
          id: 11,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        },
        {
          id: 12,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2015'
        }
      ],
      2016: [
        {
          id: 13,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 14,
          previewImg: 'reviews/2/2.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 15,
          previewImg: 'reviews/3/3.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 16,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 17,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 18,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 19,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 20,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 21,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 22,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        },
        {
          id: 23,
          previewImg: 'reviews/1/1.jpg',
          personOne: {
            name: 'Роман',
            img: 'https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg',
            profileLink: 'https://vk.com/id32002161'
          },
          personTwo: {
            name: 'Ирина',
            img: 'https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg',
            profileLink: 'https://vk.com/irishkinkin'
          },
          text: 'Любой текст',
          date: '06 сентября 2016'
        }
      ]
    },

    clientsTextReviews: [
      {
        id: 1,
        clientName: 'Алина',
        eventName: 'Свадьба алина & Антон',
        text: 'Вправо следующий отзыв',
        img: 'http://cs637827.vk.me/v637827407/15963/c1KTZVWOtLQ.jpg',
        authorLink: 'http://vk.com/1'
      },
      {
        id: 2,
        clientName: 'Алиса',
        eventName: 'Свадьба алина & Антон',
        text: 'Вправо следующий отзыв',
        img: 'http://cs637827.vk.me/v637827407/15963/c1KTZVWOtLQ.jpg',
        authorLink: 'http://vk.com/2'
      },
      {
        id: 3,
        clientName: 'Иван',
        eventName: 'Свадьба алина & Антон',
        text: 'Еще чуть чуть..',
        img: 'http://cs622126.vk.me/v622126312/4e2c7/bnXXftSvY6k.jpg',
        authorLink: 'http://vk.com/3'
      }
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



    calendarEvents: [
        // дата в формате день-месяц-год
      {
        date: '22-10-2016',
        name: 'Свадьба кирилла и камиллы'
      },
      {
        date: '12-11-2016',
        name: 'че нить еще'
      },
      {
        date: '19-11-2016',
        name: 'Свадьба саши грей'
      },
      {
        date: '01-12-2016',
        name: 'Свадьба Людмилы и ?'
      },
      {
        date: '03-01-2017',
        name: 'Свадьба Криштиану роналдо на каком нить педике'
      }
    ],

  },
}
