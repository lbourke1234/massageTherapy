export const sendContactForm = async (data) =>
  fetch("/api/sendMail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Acccept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
