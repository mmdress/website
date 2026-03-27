export function digitsOnlyPhone(value: string) {
  let digits = value.replace(/\D/g, '');
  if (digits.length > 11 && digits.startsWith('55')) {
    digits = digits.slice(2);
  }
  return digits.slice(0, 11);
}

/**
 * BR phone mask: (XX) XXXX-XXXX (landline) or (XX) 9XXXX-XXXX (mobile with 9).
 */
export function formatBrazilPhoneMask(value: string) {
  const digits = digitsOnlyPhone(value);
  if (digits.length === 0) return '';

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  const isMobile = digits[2] === '9';

  if (isMobile) {
    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
}
