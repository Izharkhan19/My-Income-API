const axios = require("axios");
const qs = require("qs");

// const CLIENT_ID = "ats-75bad9d1-3b4a-4b31-8865-8612d5ac1247";
// const CLIENT_SECRET = "K84ZBGSd1SDUT9BZL_3-fOo2DKnf8sVm";
// const REDIRECT_URI = "https://melodic-faint-custard.glitch.me";

const CLIENT_ID = "ats-75bad9d1-3b4a-4b31-8865-8612d5ac1247";
const CLIENT_SECRET = "K84ZBGSd1SDUT9BZL_3-fOo2DKnf8sVm";
const REDIRECT_URI = "https://melodic-faint-custard.glitch.me";

exports.getAdobeAuth = async (req, res) => {
  const { code } = req.body;

  const data = {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(
      "https://api.in1.adobesign.com/oauth/v2/token",
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("response.data", response.data);
    res.json({ data: response.data });
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).json({ error: "Failed to fetch access token" });
  }
};
