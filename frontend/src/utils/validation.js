// Shared validation helpers. Each returns "" when valid, or an error message.

export function validateName(value, label = "full name") {
  return value.trim().length >= 2 ? "" : `Please enter your ${label.toLowerCase()}.`;
}

export function validateEmail(value) {
  const v = value.trim();
  if (!v) return "Please enter your email address.";
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email, like you@company.com.";
}

export function validatePhone(value, countryCode) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "Please enter your mobile number.";
  if (countryCode === "+91") {
    return /^[6-9]\d{9}$/.test(digits) ? "" : "Enter a valid 10-digit Indian mobile number.";
  }
  return digits.length >= 7 && digits.length <= 13 ? "" : "Enter a valid mobile number.";
}

export function validateRequiredChoice(value, message = "Please choose at least one option.") {
  const filled = Array.isArray(value) ? value.length > 0 : Boolean(value);
  return filled ? "" : message;
}
