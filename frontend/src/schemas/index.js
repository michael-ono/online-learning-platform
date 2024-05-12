import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Password must contain an Uppercase, lowercaase and symbol @" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});
