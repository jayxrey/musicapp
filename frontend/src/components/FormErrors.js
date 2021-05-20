export default function validateInfo(values) {
  let errors = {}
  if (!values.username()){
    errors.username= "Username required";
  }
  if (!values.password()){
    errors.username= "Password required";
  }
  return errors;
}
