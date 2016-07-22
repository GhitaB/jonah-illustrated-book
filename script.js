angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.items = [
      {
        id: 1,
        img: '01.png',
        done: 80,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: 2,
        img: '02.png',
        done: 60,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
    ];
  });
