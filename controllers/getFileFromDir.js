import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getFileFromDir = async (req, res, next) => {
  try {
    let { set, size, name, fileType } = req.params;
    // find the first alphabet in the name provided
    // if undefined, return the image labeled dot1
    name = name.toLowerCase();
    name = (name.match(/[a-zA-Z]/) || ["dot1"]).pop();
    // if no set is provided return from set1
    if (set === undefined) {
      set = "set1";
    }
    // path for finding the image files in the public/letters folder
    const img = path.join(__dirname, "..", "public", "letters");
    // return the image file
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    return res.sendFile(`${img}/${set}/${name}/${name}-${size}.${fileType}`);
  } catch (error) {
    return next({
      title: "avatarLetterErrorMessage",
      messageForLog: error?.message ? error.message : "",
      status: 400,
      message: "Oops! Something went wrong. Please try again or reach out for further help."
    });
  }
};
