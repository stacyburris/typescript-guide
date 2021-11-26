# Sort Project

Packages: 
- nodemon
- concurrently 

Commands:
- `tsc --init` - to create tsconfig.json file
- `npm init -y` - package.json
- `tsc -w`: compile and continue to watch changes
- `npm start` after adjusting package.json scripts this command will now build and run code 

Modified scripts: 

```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```


