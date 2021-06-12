import * as yup from "yup";

const REQUIRED_FIELD = "This field is required";

export const AddBookSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_FIELD),
  genre: yup.string().required(REQUIRED_FIELD),
  author: yup.string().required(REQUIRED_FIELD),
});
