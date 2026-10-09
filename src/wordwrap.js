function wordWrap(str, width) {
  if (typeof str !== 'string') return str;
  width = width || 80;
  var lines = [];
  var remaining = str;
  while (remaining.length > width) {
    var idx = remaining.lastIndexOf(' ', width);
    if (idx <= 0) idx = width;
    lines.push(remaining.slice(0, idx));
    remaining = remaining.slice(idx + 1);
  }
  lines.push(remaining);
  return lines.join('\n');
}
module.exports = { wordWrap };
