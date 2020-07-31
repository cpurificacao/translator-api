const { Translate } = require("@google-cloud/translate").v2;

const { API_KEY } = process.env;

const translator = new Translate({ key: API_KEY });

module.exports = async function translate(req, res) {
  const { text, locale } = req.query;

  let [translations] = await translator.translate(text, locale);

  translations = Array.isArray(translations) ? translations : [translations];

  translations = translations.reduce(
    (results, current) => (results += current),
    ""
  );

  res.json({ translations });
};
