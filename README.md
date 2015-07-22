## babel-fs

Implement nodejs fs module with babel on promise style.


#### Usage

```javascript
import bfs from './babel-fs';

const SELF = process.argv[1];

// call the readFileSync
var selfContent = bfs.readFileSync(SELF);

// call the readFile mehtod with promsie style
bfs.readFile(SELF).then(data => {
  console.log(selfContent + '' === data + ''); // true
  // done
  console.log(data);
}, error => {
  // fail
  console.error(error);
});
```
