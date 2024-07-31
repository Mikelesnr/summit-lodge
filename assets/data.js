import ceotv from "./images/ceo/ceo-tv.jpeg";
import ministerialmain from "./images/ministerial-50/ministerial-main.jpeg";
import ministerialtv from "./images/ministerial-50/ministerial-tv.jpeg";
import ministerialbed from "./images/ministerial-50/ministrial-bed.jpeg";
import ministerialwide from "./images/ministerial/ministerial-wide.jpeg";
import ministerialfridge from "./images/ministerial-50/ministerial-fridge.jpeg";
import ministerialtoilet from "./images/ministerial-50/minsterial-toilet.jpeg";
import kingmain from "./images/king-80/king-main.jpeg";
import kingtv from "./images/king-80/king-tv.jpeg";
import kingbed from "./images/king-80/king-bed.jpeg";
import kingwide from "./images/king/king-wide.jpeg";
import kingshower from "./images/king/king-shower.jpeg";
import kingtoilet from "./images/king-80/king-toilet.jpeg";
import queenshower from "./images/queen/queen-shower.jpeg";
import queentv from "./images/queen-60/queen-tv.jpeg";
import queenbed from "./images/queen/queen-bed.jpeg";
import queenmain from "./images/queen-60/queen-main.jpeg";
import queenbathroom from "./images/queen-60/queen-bathroom.jpeg";
import queentoilet from "./images/queen-60/queen-toilet.jpeg";
import presidentialmain from "./images/presidential-70/presidential-main.jpeg";
import presidentialtv from "./images/presidential-70/presidential-tv.jpeg";
import presidentialbed from "./images/presidential-70/presidential-bed.jpeg";
import presidentialwide from "./images/presidential-70/presidential-wide.jpeg";
import presidentialfull from "./images/presidential-70/presidential-full.jpeg";
import presidentialtoilet from "./images/presidential-70/presidential-toilet.jpeg";
import signaturemain from "./images/signature-70/signature-main.jpeg";
import signaturetv from "./images/signature-70/signature-tv.jpeg";
import signaturefridge from "./images/signature-70/signature-fridge.jpeg";
import signaturebed from "./images/signature/signature-bed.jpeg";
import signaturewide from "./images/signature/signature-wide.jpeg";
import signaturefull from "./images/signature/signature-full.jpeg";
import signaturetoilet from "./images/signature-70/signature-toilet.jpeg";
import monarchmain from "./images/monarch-100/monarch-main.jpeg";
import monarchtv from "./images/monarch-100/monarch-tv.jpeg";
import monarchbed from "./images/monarch-100/monarch-bed.jpeg";
import monarchtoilet from "./images/monarch-100/monarch-toilet.jpeg";
export default [
  {
    sys: {
      id: "1",
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
              url: ministerialbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: ministerialfridge,
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
      id: "2",
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
              url: queenmain,
            },
          },
        },
        {
          fields: {
            file: {
              url: queenbathroom,
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
      id: "3",
    },
    fields: {
      name: "presidential",
      slug: "presidential",
      type: "single",
      price: 70,
      size: 300,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
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
              url: presidentialtv,
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
      name: "signature",
      slug: "signature",
      type: "double",
      price: 70,
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
              url: signaturefridge,
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
  {
    sys: {
      id: "5",
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
      featured: true,
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
              url: kingtoilet,
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
      name: "monarch",
      slug: "monarch",
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
              url: monarchmain,
            },
          },
        },
        {
          fields: {
            file: {
              url: monarchbed,
            },
          },
        },
        {
          fields: {
            file: {
              url: monarchtv,
            },
          },
        },
        {
          fields: {
            file: {
              url: monarchtoilet,
            },
          },
        },
      ],
    },
  },
];
