import axios from "axios";

const QTT = 10;

const fetchArticles = async ({ page, order }) => {
  try {
    console.log(process.env);
    const { data } = await axios.get(
      `http://localhost:8000/articles?page=${page}&quantity=${QTT}&order=${order}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default fetchArticles;
