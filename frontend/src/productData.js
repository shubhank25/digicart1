const products = [
    {
      id: 1,
      name: "Apple iPhone 12 128 GB, Blue",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000",
      description:
        "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      price: 80230,
      countInStock: 15,
    },
    {
      id: 2,
      name: "New Apple iPhone 12 Mini (64GB) - Purple ",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71hVxI-Ed-S._SL1500_.jpg",
      description:
        "5.4-inch (13.7 cm diagonal) Super Retina XDR display Ceramic Shield tougher than any smartphone glass A14 Bionic chip the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras Night mode Deep Fusion Smart HDR 3, 4K Dolby Vision HDR recording, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance Supports MagSafe accessories for easy attachment and faster wireless charging iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
      price: 66400.00,
      countInStock: 10,
    },
    {
      id: 3,
      name: "iPhone 12 Pro",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg",
      description:
        " 6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion,Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",
      price: 115100,
      countInStock: 5,
    },
    {
      id: 4,
      name: "New Apple iPhone 11 (64GB) - Green",
      imageUrl:
        "https://m.media-amazon.com/images/I/71w3oJ7aWyL._SL1500_.jpg",
      description:
        "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68) Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps 12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo Face ID for secure authentication A13 Bionic chip with third-generation Neural Engine Fast-charge capable",
      price: 51999,
      countInStock: 25,
    },
    {
      id: 5,
      name: "Apple iPhone XR 64GB Black",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg",
      description:
        "The iPhone XR has arrived to scintillate our senses with a host of features, such as the Liquid Retina Display, a faster Face ID, and a powerful A12 Bionic Chip. Whether it's that picture-perfect portrait shot or a jaw-dropping HDR selfie, the cameras of the iPhone XR will continue to amaze you with their brilliance. Now, experience beauty, in every way.",
      price: 41999,
      countInStock: 15,
    },
    {
      id: 6,
      name: "New Apple iPhone 12 Pro Max (128GB) - Gold",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg",
      description:
        "6.7-inch (17 cm diagonal) Super Retina XDR display, Ceramic Shield, tougher than any smartphone glass, A14 Bionic chip, the fastest chip ever in a smartphone, Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording, LiDAR Scanner for improved AR experiences, Night mode portraits, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording, Industry-leading IP68 water resistance, Supports MagSafe accessories for easy attach and faster wireless charging, iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
      price: 126000,
      countInStock: 10,
    },
    {
      id: 7,
      name: "Apple Lightning to 3.5mm Audio Cable (1.2m) - White",
      imageUrl:
        "https://www.mytrendyphone.eu/images2/Apple-MMX62ZM-A-Lightning-to-3.5mm-Adapter-12092016-01-p.jpg",
      description:
        "Connect your AirPods Max or Beats Solo Pro headphones to the audio-out port on an airplane, iPhone, iPad, Mac, or other device. Connect your iOS or iPadOS device to the audio-in port on your car stereo or other speaker. This cable allows you to connect your AirPods Max or Beats Solo Pro headphones to 3.5 mm audio ports. It can also connect your iOS or iPadOS device to 3.5 mm audio ports.",
      price: 3500,
      countInStock: 10,
    },
    {
      id: 8,
      name: "Apple AirPods with Wireless Charging Case",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg",
      description:
        "Automatically on, automatically connected, Easy setup for all your Apple devices, Quick access to Siri by saying “Hey Siri”, Double-tap to play or skip forward, New Apple H1 headphone chip delivers faster wireless connection to your devices, Charges quickly in the case, Case can be charged either wirelessly using a Qi-compatible charging mat or using the Lightning connector, Rich, high-quality audio and voice, Listen and talk all day with multiple charges from the Charging Case",
      price: 16999,
      countInStock: 10,
    },
  
    { 
      id: 9,
      name: "Apple Silicone Case with MagSafe (for iPhone 12 Mini) - Black",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61nXS-k8nqL._SL1500_.jpg",
      description:
        "The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfiber lining for even more protection. With built-in magnets that align perfectly with iPhone 12 | 12 Pro, the case offers a magical attach and detach experience, every time. The perfectly aligned magnets make wireless charging faster and easier than ever before. And when it’s time to charge, just leave the case on your iPhone and snap on your MagSafe charger, or set it on your Qi-certified charger. Like every Apple-designed case, it undergoes thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops. Compatibility: iPhone 12 mini",
      price: 1599,
      countInStock: 10,
    },
  
    { 
      id: 10,
      name: "Apple MacBook Air - Space Grey",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._SL1500_.jpg",
      description:
        "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance, Go longer than ever with up to 18 hours of battery life, 8-core CPU delivers up to 3.5x faster performance to tackle projects faster than ever, Up to eight GPU cores with up to 5x faster graphics for graphics-intensive apps and games, 16-core Neural Engine for advanced machine learning, 8GB of unified memory so everything you do is fast and fluid, Superfast SSD storage launches apps and opens files in an instant",
      price: 92900,
      countInStock: 10,
    }
  
  
    
  
  
  
    
  ];
  
  export default products;
  