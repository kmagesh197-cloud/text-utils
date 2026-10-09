function truncate(str, len, suffix) {
  if (typeof str !== 'string') return str;
  suffix = suffix || '...';
  if (str.length <= len) return str;
  return str.slice(0, len - suffix.length) + suffix;
}
module.exports = { truncate };
