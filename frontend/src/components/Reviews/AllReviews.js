const reviews = [
  {
    name: "Barbara Glison",
    title: "I love it! It worked within a few weeks!",
    review:
      "Very luxurious feel with super quick absorption of my thirsty skin. I was really surprised when I saw the size of the tube. The packaging is fancy, and it came really fast! I am located in Canada, so I didn't expect such a fast delivery!",
  date: "Feb. 25, 2022, 10:50 p.m."
    },
  {
    name: "Jenny Stricklin",
    title: "Changed my skin for better",
    review:
      "Using gle for wrinkles is a definite change in the way my skin feels.....very plump!",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714099965/GLE%20SKIN/270268682_1380187935747630_7916194109229595703_n_1_hfjpc7.jpg",
  date: "Jul. 31, 2023, 3:34 p.m."
    },
  {
    name: "sondra rizzo",
    title: "Great product",
    review:
      "It’s feels great going on my skin. Such a soft formula. Love it",
    starRate: "4",
    date: "Aug. 29, 2023, 9:39 p.m."
  },
  {
    name: "Marco Pena",
    title: "This product is the best wrinkle remover",
    review:
      "My mother had bought this Glè for wrinkles and then she asked me to try it out and honestly, wrinkles disappear after a week. 👍",
 date: "Nov. 25, 2023, 1:50 p.m.",
    },
  {
    name: "Dagmar Dawney",
    title: "I tried everything!",
    review:
      "This is my favorite face cream and as a result of using it consistently, my 66-year-old face looks like that of a 20-year-old...lol...just kidding, but it is a great product and my skin is in great shape because of it. The biggest plus is that it is half the price that I used to pay at Walmart. It’s a worthwhile product for certain!",
      date: "Feb. 25, 2022, 8:15 p.m.",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714099961/GLE%20SKIN/148617368_253268886248220_3632480324094231439_n_1_phrnyh.jpg",
  },
  {
    name: "Katherina Allwood",
    title: "Huge change!",
    review:
      "Huge change in the appearance and feel of my skin! Goodbye wrinkles and deep grooves. I bought this product along with an Olay product that was similarly rated 4 best over-the-counter wrinkle products. I alternated between them and tried both. Gle's product was clearly Superior. It goes on creamy and is almost instantly absorbed. After years of applying retinol based acids and moisturizers, this is the one that is finally doing the trick. My skin looks better than it has looked in probably the last 10 years. Friends even notice the difference in my skin and asked what I was using! I'm incredibly happy with this product and would recommend it to everyone. There is a slight tingling sensation when I put it on, but I have experienced no breakouts or redness or blotchiness.",
      date: "Feb. 24, 2022, 4:40 a.m.",
  },
  {
    name: "Bridget Terbrug ",
    title: "I can feel my skin tighter.",
    review:
      "I like the consistency of the cream and a little goes a long way. There is a tingling sensation and be careful around your eyes. I also felt my wrinkles faded a little. I am 78 years old and have taken very good care of my skin and have good genes. I've used many products over the years. You really cannot turn back time unless you have plastic surgery( I haven't), but you can soften the appearance of some wrinkling if you stay out of the sun and keep your face moisturized. I believe this product has helped.",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714099961/GLE%20SKIN/198750717_4383997028312826_6745846092582479310_n_q5jc8b.jpg",
    date: "Feb. 8, 2022, 12:42 a.m.",
  },
  {
    name: "Anthea MacCaughen",
    title: "Made my face soft",
    review:
      "Goes on so smooth and made my face so soft. I've been using it for a couple of months now and can totally see a difference. The product is pretty big, so it lasts a long time. It's almost 4 times bigger than anything I've ever used. The price is also decent!",
  date: "Aug. 16, 2020, 4:16 p.m.",
    },
  {
    name: "Jess ",
    title: "Must have anti-aging product!",
    review:
      "This is a must-have cream if you are looking for a cream that beautifies the skin and doesn't cost a fortune. It works well even if you have sensitive skin. I think it's all about consistency and using the product daily. Once you make it part of your daily routine it's easier to see results.",
      date: "Apr. 12, 2021, 6:58 p.m. ",
  },
  {
    name: "R. Collet ",
    title: "My skin feels moisturized",
    review:
      "This cream is the perfect consistency for me. My skin feels moisturized with out feeling heavy and it works well under make-up.",
      date: "Jan. 4, 2022, 3:35 p.m.",
      img: 'https://res.cloudinary.com/doczyujqf/image/upload/v1714099961/GLE%20SKIN/285680554_691395902162877_6370918276747106419_n_n3loxp.jpg',
  },
  {
    name: "Shirlene Copeman",
    title: "Highly recommended!",
    review:
      "It’s amazing how well this cream works. My face looks smoother younger and bright .. I love it. Highly recommended!",
      date: "Feb. 6, 2022, 12:23 a.m.",
  },
  {
    name: "S C",
    title: "Great product that works!",
    review:
      "Love it. Great product. Works. Heavy enough. But not too heavy. Excellent value!",
      date: "Jan. 18, 2022, 3:13 p.m.",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714099962/GLE%20SKIN/185219075_459130488718012_34788060150274351_n_1_xq7c61.jpg",
  },
  {
    name: "Giselle Raynton",
    title: "My skin is brighter and smoother!",
    review:
      "It makes my face feel so good. I can see a difference in my face after only a week or so using this. My lines/wrinkles are softer & less noticeable and my skin overall just looks brighter.",
    starRate: "4",
    date: "Feb. 15, 2020, 9:46 p.m.",
  },
  {
    name: "Brittne Lambird ",
    title: "This is a game-changer for me!",
    review:
      "I am in love with gle for wrinkles. It moisturizes my skin very well and the fact that it's scent-free makes me love the product even more.",
      date: "Feb. 25, 2021, 7:11 p.m.",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714099962/GLE%20SKIN/271299159_243284954479247_8798968995910137266_n_wow3et.jpg",
  },
  {
    name: " Sallyanne Copin",
    title: "Same ingredients but better price",
    review:
      "It's just as good as the very expensive products in the department stores",
      date: "Mar. 8, 2022, 6:11 p.m.",
  },
  {
    name: " Lara Taffs ",
    title: "Goes a long way!",
    review:
      "I didn't expect it! The product arrived really fast. When I opened the package, I realized the tube is 4 oz and not the typical 2 oz half-empty anti-aging product. I've been using it for about 6 months now it's a part of my daily routine.",
  },
  {
    name: "Renata Chivers",
    title: "This product is unbelievable. I love it…",
    review:
      "This product is unbelievable. I love it. Within about 3 days I could see a major difference. No wrinkles around my lips and eyes and my skin on my neck has tighten up also. I have tried everything and have spent hundreds of dollars on products that don’t work. I will never be without this product. The picture above is from my 70th birthday party 2 weeks ago. People guess me to be between 45-50 years old. Don’t walk but run to get this product. I refused to have plastic surgery but wanted to age gracefully. My skin is so dewy and glows and is soft.",
      date: "Jan. 14, 2022, 5:34 p.m.",
  },
];
export { reviews };
