import axios from "axios";

const QTT = 10;

const fetchArticles = async ({ page, order }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/articles?page=${page}&quantity=${QTT}&order=${order}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default fetchArticles;
