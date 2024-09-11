// Replace the static file data retrieval with an API request

export const getFileInfo = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/qrs/find`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unique_id: id }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch file info: ${response.statusText}`);
    }

    // Extract the "qr" object from the response
    const { qr } = await response.json();

    // Destructure the relevant fields from the "qr" object
    const { type, data } = qr;

    return {
      status: 200,
      data: {
        type,
        content: data, // data contains the content, e.g., { url: "https://scannabl.com" }
      },
    };
  } catch (error) {
    console.error("Error fetching file info:", error);

    return {
      status: 404,
      data: null,
      message: "File not found or invalid QR code",
    };
  }
};
