README.md
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "index.js" }
  ]
}
"scripts": {
  "start": "node index.js"
}
