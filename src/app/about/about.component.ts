import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  
// industry partner data
industryPartnersArray:any =[
  {
    imgName:"../../assets/img/industryPartners/Oracle.jpg"
  },
  {
    imgName:"../../assets/img/industryPartners/Google.jpg"
  },
  {
    imgName:"../../assets/img/industryPartners/isro.jpg"
  },
  {
    imgName:"../../assets/img/industryPartners/Nasscom.jpg"
  },
  {
    imgName:"../../assets/img/industryPartners/Salesforce.jpg"
  },
  {
    imgName:"../../assets/img/industryPartners/EY.jpg"
  }
]


// knowledge patner data
knwdgPartnersArray:any =[
  {
    imgName:"../../assets/img/knowledgePartners/ASAP-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/Kdisc-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/ICFOSS-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/Keralauniversity-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/KSITl-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/KSITM-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/KSUM-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/KTU-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/SCERT-1.jpg"
  },
  {
    imgName:"../../assets/img/knowledgePartners/Ui-path.png"
  }
]



  ngOnInit(): void {
  }

  
  // owl carosel options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

}
