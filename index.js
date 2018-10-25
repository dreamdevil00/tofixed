Number.prototype.toFixed = function(fractionDigits) {
  const value = +this;
  if (Number.isNaN(value)) {
    return 'NaN';
  }

  const isPositive = value > 0;

  const x = isPositive ? value : -value;
  const s = isPositive ? '' : '-';
  const digits =
    typeof fractionDigits === 'undefined' ? 0 : parseInt(fractionDigits, 10);

  const factor = Math.pow(10, digits);
  const enlarged_rounded = Math.round(x * factor);
  const result = enlarged_rounded / factor;

  let sResult = '' + result;

  // walkaround to preserve zero suffixed result
  const isTenDivided = enlarged_rounded % 10 === 0;
  if (isTenDivided && !sResult.endsWith('0')) {
    sResult += '0';
  }

  return s + sResult;
};
