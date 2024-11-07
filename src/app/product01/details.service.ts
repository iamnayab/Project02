import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  productsdetail = [
    {
      id: 1,
      name: "APPLE iPhone 14 Pro Max (Deep Purple, 128 GB)",
      price: 177999,
      description: "The iPhone 14 Pro Max measures 160.70 x 77.60 x 7.85mm (height x width x thickness) and weighs 240.00 grams.It was launched in Space Black, Silver, Gold, and Deep Purple colours. It features an IP68 rating for dust and water protection. Connectivity options on the iPhone 14 Pro Max include Wi-Fi and Lightning.",
      image:"/assets/PhoneImage/iPhone.png",
    },
    {
      id:2,
      name:"SAMSUNG Galaxy S23 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)",
      price:134999,
      description:"Get a smartphone for yourself that can detect your moods and react appropriately. The Samsung Galaxy Ultra's potent processor and advanced camera sensor can handle low light and noise reduction. The phone's Snapdragon 8 Gen 2 processor, which also provides a long battery life to carry you through even the busiest days, also enables quick gaming and video streaming. You can also launch Expert RAW to take high-resolution RAW photos that are vivid and packed with information. Moreover, Dynamic AMOLED 2X offers clear, brilliant details in both bright and low-light conditions. Additionally, to smooth up gaming and save power, the refresh rate is automatically optimised with 120 Hz technology.",
      image:"/assets/PhoneImage/Galaxy-S23-Ultra.png",
    },
    {
      id:3,
      name:"Realme GT Neo 3T (Shade Black, 128 GB)  (6 GB RAM)",
      price:26999,
      description:"You can experience a unique dimension of the user interface with the innovative realme GT NEO 3T smartphone, which has been created to astound you with its spectacular design and unmatched performance. This phone's Snapdragon 870 5G processor enables slick operation and optimised performance so you can maintain your edge in productivity. A 64 MP AI Triple camera setup on this phone also allows you to quickly and easily record all of life's wonderful moments. Additionally, this smartphone's AMOLED E4 display provides an immersive and fluid viewing experience. In addition, the 5000 mAh huge battery and the 80 W SuperDart Charge support solve all of your low battery issues and let you understand the actual essence of brilliant performance.",
      image:"/assets/PhoneImage/Realme_GT.jpg",
    },
    {
      id:4,
      name:"Redmi Note 6 Pro (Red, 64 GB)  (6 GB RAM)",
      price:15999,
      description:"Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically. Take beautiful, sharp images, thanks to the Dual Pixel Autofocus technology. Its 1.4 micrometer pixel size and wider f/1.9 aperture offer you an enhanced low-light photography experience. Powered by a Qualcomm Snapdragon 636 octa-core processor and a 4000 mAh high-capacity battery, this smartphone delivers a seamless performance and up to two days of battery life.",
      image:"/assets/PhoneImage/redmi_6_pro.png",
    }
  ]
  constructor() { }
}
