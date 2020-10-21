# Running the test api

1. `yarn install` in root, /api & /api-routes folders

2. Build api endpoint

   Using command `ROUTE=<path> METHOD<method> yarn build` in root directory.
   ```
   // Example
   $ ROUTE=/test METHOD=get yarn build
   ```


3. Run the endpoint

   Using command `yarn dev --build <body>` in root directory.
   ```
   // Example
   $ yarn dev --body '{ "test": 100 }'
   ```
