# gatsby-plugin-transform-imports

Use Babel plugin transform imports with Gatsby

## Install

```bash
npm install gatsby-plugin-transform-imports
```

## How to use
Configure options in your `gatsby-config.js` file.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-transform-imports',
    options: {
      'react-bootstrap': {
        transform: 'react-bootstrap/lib/${member}',
        preventFullImport: true,
      },
      lodash: {
        transform: 'lodash/${member}',
        preventFullImport: true,
      },
    },
  },
];
```
