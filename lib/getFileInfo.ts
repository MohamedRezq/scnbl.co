export const getFileInfo = async (id: string) => {
  console.log("fileId: ", id);

  const files = {
    aBcDeFgHiJkLm: {
      type: 1,
      content: {
        url: "https://www.google.com", // Case 1: Website URL
      },
    },
    nOpQrStUvWxYz: {
      type: 2,
      content: {
        file: "https://www.tec.gov.in/public/pdf/Studypaper/5G%20Core%20Network_Study%20Paper_v8.pdf", // Case 2: PDF file
      },
    },
    qRsTuVwXyZaBc: {
      type: 3,
      content: {
        file: "https://twitter.com/Starlink?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", // Case 3: Social media link
      },
    },
    dEfGhIjKlMnOp: {
      type: 4,
      content: {
        url: "https://www.google.com/maps/place/Paris,+France/@48.8588548,2.347035,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D", // Case 4: Location URL for Google Maps
      },
    },
    pQrStUvWxYzAb: {
      type: 5,
      content: {
        image:
          "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg", // Case 5: Image URL
      },
    },
    cDeFgHiJkLmNo: {
      type: 6,
      content: {
        receivers: "test@example.com",
        subject: "Hello!",
        body: "This is a test email.", // Case 6: Email content
      },
    },
    rStUvWxYzAbCd: {
      type: 7,
      content: {
        number: "+1234567890", // Case 7: Phone number
      },
    },
    xYzAbCdEfGhIj: {
      type: 8,
      content: {
        number: "+0987654321",
        message: "Hello, this is a test SMS!", // Case 8: SMS content
      },
    },
    mNoPqRsTuVwXy: {
      type: 1,
      content: {
        url: "https://www.bing.com", // Another Case 1: Different Website URL
      },
    },
  };

  const fileInfo = files[id as keyof typeof files] || null;

  return {
    status: 200,
    data: fileInfo,
  };
};
