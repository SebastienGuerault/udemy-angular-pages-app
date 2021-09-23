import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images: Array<image> = 
  [
    {
      title : "At the beach",
      url : "https://media.istockphoto.com/photos/beach-birds-dawn-picture-id1303313895?b=1&k=20&m=1303313895&s=170667a&w=0&h=Ubc8EmHh5HgqV9vpvg-bKVO_7i-OysH7JGf3uz9GPrk="
    },
    {
      title : "Huge heelflip",
      url: "https://media.istockphoto.com/photos/young-man-skateboarding-in-los-angeles-picture-id1209988354?b=1&k=20&m=1209988354&s=170667a&w=0&h=6la5GZlsnqA6YkqDPnivlaEvuh0YIV1ng-80SFkTw3Q=",
    },
    {
      title: "Beautiful sky",
      url : "https://media.istockphoto.com/photos/great-ocean-road-at-night-milky-way-view-picture-id498309616?b=1&k=20&m=498309616&s=170667a&w=0&h=43SVydo1_QpUAcd0FoYsMdcD4R6MggN7rP3eKQMwTKA="
    },
    {
      title: "A robot friend",
      url : "https://media.istockphoto.com/photos/cute-artificial-intelligence-robot-with-headset-picture-id1283257467?b=1&k=20&m=1283257467&s=170667a&w=0&h=5NF5-7_2H4LOfeuKxWnGVdyZkV5uq8qeVxK-tfA7NL8="
    },
    {
      title : "On vacation",
      url : "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b24lMjB2YWNhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "Skateboarding",
      url: "https://images.unsplash.com/photo-1563297592-fc163070b609?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Last night",
      url : "https://images.unsplash.com/photo-1615140759302-5088cb0934a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhc3QlMjBuaWdodHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At work",
      url : "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGF0JTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "In the us",
      url : "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "Learn a trick",
      url: "https://images.unsplash.com/photo-1535031827645-b6a5e9e9dc20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGxlYXJuJTIwYSUyMHRyaWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Stars",
      url : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fHN0YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Robot",
      url : "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9ib3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "Last week",
      url : "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzdCUyMHdlZWslMjB2YWNhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "Wow !",
      url: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGluY3JlZGlibGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Moutain view",
      url : "https://images.unsplash.com/photo-1609497199001-d23397152ede?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91dGFpbiUyMHZpZXd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "My new toy",
      url : "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "Sun is out !",
      url : "https://images.unsplash.com/photo-1535921516579-270f91bf9e57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VuJTIwaXMlMjBvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title : "How to kickflip",
      url: "https://images.unsplash.com/photo-1564245739699-b5112ea665fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpY2tmbGlwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "My first image",
      url : "https://images.unsplash.com/photo-1555700100-3901d49a8fca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG15JTIwZmlyc3QlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "For xmas",
      url : "https://images.unsplash.com/photo-1576344333162-f83e5e18902e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNocmlzdG1hc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  currentPage: number = 0;
  nbIndexPerPage: number = 5;
  nbMaxPages: number = Math.ceil(this.images.length / this.nbIndexPerPage);
  highligthIndex: string = '#';
  indexArray = new Array(this.images.length);
  

  onPageChange(index: number) {
		this.currentPage = index;
  }

  checkWindowIndex(index: number) {
		return Math.abs(this.currentPage - index) < 5;
  }

  getDisplayValue(index: number) {
    console.log(index, this.indexArray[index]);
    return this.indexArray[index];
  }

  onClickNextPage() {

    this.currentPage++;

    for (let i = 0; i < this.indexArray.length; i++) {
      if ((i >= this.currentPage * this.nbIndexPerPage) && (i < (this.currentPage + 1) * this.nbIndexPerPage)) {
        console.log("ok");
        
        this.indexArray[i] = "block";
      } else {
        console.log("pas ok");
        this.indexArray[i] ="none";
      }
    }
    
  }
}

interface image {
  title: string,
  url: string
}