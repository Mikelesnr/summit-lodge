import ceohead from "./images/ceo/ceo-main.jpeg";
import ceobed from "./images/ceo/ceo-bed.jpeg";
import ceoshower from "./images/ceo/ceo-shower2.jpeg";
import ceotoilet from "./images/ceo/ceo-toilet.jpeg";
import ceotv from "./images/ceo/ceo-tv.jpeg";
import ministerialmain from "./images/ministerial/ministerial-main.jpeg";
import ministerialtv from "./images/ministerial/ministerial-tv.jpeg";
import ministerialbed from "./images/ministerial/ministerial-bed.jpeg";
import ministerialwide from "./images/ministerial/ministerial-wide.jpeg";
import ministerialshower from "./images/ministerial/ministerial-shower.jpeg";
import ministerialtoilet from "./images/ministerial/ministerial-toilet.jpeg";
import kingmain from "./images/king/king-main.jpeg";
import kingtv from "./images/king/king-tv.jpeg";
import kingbed from "./images/king/king-bed.jpeg";
import kingwide from "./images/king/king-wide.jpeg";
import kingshower from "./images/king/king-shower.jpeg";
import kingtoilet from "./images/king/king-toilet.jpeg";
import queenshower from "./images/queen/queen-shower.jpeg";
import queentv from "./images/queen/queen-tv.jpeg";
import queenbed from "./images/queen/queen-bed.jpeg";
import queenwide from "./images/queen/queen-wide.jpeg";
import queenfull from "./images/queen/queen-full.jpeg";
import queentoilet from "./images/queen/queen -toilet.jpeg";
import presidentialmain from "./images/presidential/presidential-main.jpeg";
import presidentialtv from "./images/presidential/presidential-tv.jpeg";
import presidentialbed from "./images/presidential/presidential-bed.jpeg";
import presidentialwide from "./images/presidential/presidential-wide.jpeg";
import presidentialfull from "./images/presidential/presidential-full.jpeg";
import presidentialtoilet from "./images/presidential/presidential-toilet.jpeg";
import signaturemain from "./images/signature/signature-main.jpeg";
import signaturetv from "./images/signature/signature-tv.jpeg";
import signaturebed from "./images/signature/signature-bed.jpeg";
import signaturewide from "./images/signature/signature-wide.jpeg";
import signaturefull from "./images/signature/signature-full.jpeg";
import signaturetoilet from "./images/signature/signature-toilet.jpeg";
export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "ceo",
      slug: "ceo",
      type: "single",
      price: 60,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a queen-sized bed, a 50-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities and air-conditioning. ",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: ceohead,
            },
          },
        },
        {
          fields: {
            file: {
              url: ceobed,
            },
          },
        },
        {
          fields: {
            file: {
              url: ceotv,
            },
          },
        },
        {
          fields: {
            file: {
              url: ceoshower,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "ministerial",
      slug: "ministerial",
      type: "single",
      price: 50,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a queen-sized bed, a 50-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities and air-conditioning. ",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: ministerialmain,
            },
          },
        },
        {
          fields: {
            file: {
              url: ministerialbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: ministerialtoilet,
            },
          },
        },
        {
          fields: {
            file: {
              url: ministerialtv,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "presidential",
      slug: "presidential",
      type: "single",
      price: 80,
      size: 300,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a king-sized bed, a 60-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities, two executive seaters and air-conditioning. ",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: presidentialmain,
            },
          },
        },
        {
          fields: {
            file: {
              url: presidentialbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: presidentialfull,
            },
          },
        },
        {
          fields: {
            file: {
              url: presidentialtoilet,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "king",
      slug: "king",
      type: "single",
      price: 80,
      size: 400,
      capacity: 1,
      pets: false,
      breakfast: true,
      featured: false,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a king-sized bed, a 60-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities and air-conditioning.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: kingmain,
            },
          },
        },
        {
          fields: {
            file: {
              url: kingbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: kingtv,
            },
          },
        },
        {
          fields: {
            file: {
              url: kingshower,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "queen",
      slug: "queen",
      type: "double",
      price: 60,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a queen-sized bed, a 50-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities and air-conditioning",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: queenfull,
            },
          },
        },
        {
          fields: {
            file: {
              url: queenbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: queentv,
            },
          },
        },
        {
          fields: {
            file: {
              url: queentoilet,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "signature",
      slug: "signature",
      type: "double",
      price: 100,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "The room comes with a full Dstv package, high speed Wi-Fi, a king-sized bed, a 65-inch tv, pressurized hot water, porcelain tiled floors, access room service for all meals, self-service tea facilities, two executive seaters and air-conditioning. ",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: signaturemain,
            },
          },
        },
        {
          fields: {
            file: {
              url: signaturebed,
            },
          },
        },
        {
          fields: {
            file: {
              url: signaturetv,
            },
          },
        },
        {
          fields: {
            file: {
              url: signaturetoilet,
            },
          },
        },
      ],
    },
  },
  // {
  //   sys: {
  //     id: "7",
  //   },
  //   fields: {
  //     name: "double standard",
  //     slug: "double-standard",
  //     type: "double",
  //     price: 300,
  //     size: 400,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img7,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "8",
  //   },
  //   fields: {
  //     name: "double deluxe",
  //     slug: "double-deluxe",
  //     type: "double",
  //     price: 400,
  //     size: 500,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img8,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "9",
  //   },
  //   fields: {
  //     name: "family economy",
  //     slug: "family-economy",
  //     type: "family",
  //     price: 300,
  //     size: 500,
  //     capacity: 3,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img9,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "10",
  //   },
  //   fields: {
  //     name: "family basic",
  //     slug: "family-basic",
  //     type: "family",
  //     price: 350,
  //     size: 550,
  //     capacity: 4,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img10,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "11",
  //   },
  //   fields: {
  //     name: "family standard",
  //     slug: "family-standard",
  //     type: "family",
  //     price: 400,
  //     size: 600,
  //     capacity: 5,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img11,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "12",
  //   },
  //   fields: {
  //     name: "family deluxe",
  //     slug: "family-deluxe",
  //     type: "family",
  //     price: 500,
  //     size: 700,
  //     capacity: 6,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img12,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "13",
  //   },
  //   fields: {
  //     name: "presidential",
  //     slug: "presidential-room",
  //     type: "presidential",
  //     price: 600,
  //     size: 1000,
  //     capacity: 10,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: room1,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
];
