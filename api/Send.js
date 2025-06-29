export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    if (!body || !body.text) {
      return res.status(400).json({ error: "هیچ متنی ارسال نشده!" });
    }

    const receivedText = body.text;
    console.log("دریافت شد:", receivedText);

    res.status(200).json({
      status: "ok",
      received: receivedText,
    });
  } else {
    res.status(405).json({ error: "فقط درخواست POST پشتیبانی می‌شود." });
  }
}
