npm i

To update data types:
 `mkdir -p ./src/grpc-ts-types && ./node_modules/grpc-tools/bin/protoc --plugin=protoc-gen-ts=C:/Projects/user-service-grpc/node_modules/.bin/protoc-gen-ts.cmd --ts_out=./src/grpc-ts-types ./proto/*.proto` // via bash, Currectly setup for Windows and using absolete path)
 
To run app (use bash):
1. Compile: `./node_modules/.bin/tsc`
2. Copy autogenerated types to build `mkdir -p build/src && cp -r src/grpc-ts-types build/src`
3. Autogenerate GRPC JS code `./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./build/src/grpc-ts-types --grpc_out=./build/src/grpc-ts-types ./proto/*.proto`
4. start: `node ./build/server.js`

To update dependencies:
1. Install: npm i -D npm-check-updates
2. Run it: npx npm-check-updates -u
3. Run: npm i