kv
---

- a key-value data structure
- with strings for keys
- 'immutable'
- json/redux friendly
- fast (O(logN)) updates
- fast reads via WeakMap memoization

`npm install @threepointone/kv --save`

api
---
```jsx
import { make, get, set, del, entries, toObject } from '@threepointone/kv'
```

- `make()` : create a new kv store

```jsx
let o = make()
```

- `get(o, key)` : like `o[key]`
- `set(o, key,value)` : like `{ ...o, [key]: value }`
- `del(o, key)` : like `{ ...o, [key]: undefined }`

- `entries(o)`: returns an array of `[k, v]` entries
- `toObject(o)` : returns a regular js object with `k:v` entries


rationale
---

(AKA "Why would I use this over Immutable.js/mori/seamless-immutable/etc?")

I made this module for redux-react-local, to solve a very specific use case with unique constraints. Specifically -

- fast writes/updates
- it sticks close to regular json objects, no custom types
- redux friendly, ie - you can stick it on a redux store and it should just work
- server side render friendly - because they're regular objects, one can simply serialize/deserialize across the wire
- did not need Lists, Vectors, etc,


todo
---

- satisfy Iterable protocol
- compare perf with other libs
- reclaim GC when deleting keys