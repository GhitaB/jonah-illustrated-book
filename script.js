angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.items = [
      {
        id: 1,
        img: '01.png',
        done: 80,
        progress: 'success',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: 2,
        img: '02.png',
        done: 60,
        progress: 'success',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: 3,
        img: '03.png',
        done: 50,
        progress: 'info',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: 4,
        img: '04.png',
        done: 30,
        progress: 'warning',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: 5,
        img: '00.png',
        done: 10,
        progress: 'danger',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ];
  });
