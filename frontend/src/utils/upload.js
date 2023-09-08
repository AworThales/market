import axios from "axios";

/** Uploading file to cloudinary */
const upload = async (file) =>{
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "market");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dkvyk1saa/image/upload",
        data
      );
      const { url } = res.data;
      return url;
    } catch (err) {
      console.log(err);
    }
  };

  export default upload