[![version](https://img.shields.io/npm/v/@zikwall/use-localforage)](https://www.npmjs.com/package/@zikwall/use-localforage)
[![tests](https://github.com/zikwall/use-localforage/workflows/tests/badge.svg)](https://github.com/zikwall/use-localforage/actions)
[![downloads](https://img.shields.io/npm/dw/@zikwall/use-localforage)](https://www.npmjs.com/package/@zikwall/use-localforage)

<div align="center">
  <h1>use localForage</h1>
  <h5>localForage is a fast and simple storage library for JavaScript</h5>
</div>

### Installation

- `$ yarn add @zikwall/use-localforage`

### How to use

```typescript jsx
import { useLocalForage } from "@zikwall/use-localforage";

interface User {
    name: string;
    lastname: string;
    age: number;
}

function App() {
    const [ userValue, setUserValue, removeUserValue ] = useLocalForage<User>('user', {...});

    let onUpdate = () => {
        setUserValue({...});
    };

    let onRemove = () => {
        removeUserValue();
    };

    return (
        <div className="example component">
            <button onClick={onUpdate}>Click for update user properties</button>
            <button onClick={onRemove}>Click for remove user properties</button>

            <p>Name is: {userValue?.name}</p>
            <p>Lastname is: {userValue?.lastname}</p>
            <p>Age is: {userValue?.age}</p>
        </div>
    );
}
```

### Tests

- `$ yarn test`
