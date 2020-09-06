module.exports = {
  variants: {
    scale: ({ after }) => after(['active'], 'focus'),
    boxShadow: ({ after }) => after(['active'], 'focus')
  }
}
