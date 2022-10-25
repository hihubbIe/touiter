export const CLEAN_STRING = '\0';

const isDirty = (str: string): boolean => {
  return str !== CLEAN_STRING;
}

const cleanStringIfNeeded = (str: string): string => {
  if (str[0] === '\0') return str.slice(1);
  return str;
}

export const stringValidator = (str: string): {content: string, pointing: string} | false => {
  if (!isDirty(str)) return false;
  str = cleanStringIfNeeded(str);
  if (str.length < 3) return {content: 'Field has to be 3 character or more', pointing: 'above'};
  if (str.length > 24) return {content: 'Field has to be 24 characters or less', pointing: 'above'};
  if (!str.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) return {content: 'Field must be alphanumeric', pointing: 'above'};
  return false;
}

export const emailValidator = (email: string): {content: string, pointing: string} | false => {
  if (!isDirty(email)) return false;
  email = cleanStringIfNeeded(email);
  if (email.length > 64) return {content: 'Email has to be 64 characters or less', pointing: 'above'};
  if (!email.match(/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/)) return {content: 'Field must be a valid email', pointing: 'above'}
  return false;
}

export const passwordValidator = (pwd: string): {content: string, pointing: string} | false => {
  if (!isDirty(pwd)) return false;
  pwd = cleanStringIfNeeded(pwd);
  if (pwd.length < 8) return {content: 'Password has to be 8 characters or more', pointing: 'above'};
  if (pwd.length > 24) return {content: 'Password has to be 24 characters or less', pointing: 'above'};
  return false;
}

export const password2Validator = (pwd: string, pwd2: string): {content: string, pointing: string} | false => {
  if (!isDirty(pwd2)) return false;
  pwd2 = cleanStringIfNeeded(pwd2);
  if (pwd !== pwd2) return {content: 'Passwords don\'t match', pointing: 'above'};
  return false;
}
