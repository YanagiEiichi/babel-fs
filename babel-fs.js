import fs from 'fs';

export default Object.keys(fs).join().match(/\b\w+(?=Sync\b)/g).reduce((base, name) => (
  base[name] = (...args) => new Promise((resolve, reject) => {
    fs[name](...args, (error, data) => error ? reject(error) : resolve(data));
  }), base
), { __proto__: fs });
