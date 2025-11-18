# @tsonic/types

TypeScript type definitions for CLR/.NET primitives.

## Installation

```bash
npm install @tsonic/types
```

## Usage

### Named Imports

```typescript
import { int, decimal, bool, long } from "@tsonic/types";

const age: int = 42 as int;
const price: decimal = 99.99 as decimal;
const isActive: bool = true as bool;
const timestamp: long = Date.now() as long;
```

### Global Types

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@tsonic/types/global"]
  }
}
```

Or use a triple-slash reference:

```typescript
/// <reference types="@tsonic/types/global" />

const count: int = 10 as int;
```

## Available Types

### Integer Types

| Type | CLR Type | Range | Bytes |
|------|----------|-------|-------|
| `sbyte` | `System.SByte` | -128 to 127 | 1 |
| `byte` | `System.Byte` | 0 to 255 | 1 |
| `short` | `System.Int16` | -32,768 to 32,767 | 2 |
| `ushort` | `System.UInt16` | 0 to 65,535 | 2 |
| `int` | `System.Int32` | -2,147,483,648 to 2,147,483,647 | 4 |
| `uint` | `System.UInt32` | 0 to 4,294,967,295 | 4 |
| `long` | `System.Int64` | ~-9.2e18 to ~9.2e18 | 8 |
| `ulong` | `System.UInt64` | 0 to ~1.8e19 | 8 |
| `nint` | `System.IntPtr` | Platform-dependent | 4/8 |
| `nuint` | `System.UIntPtr` | Platform-dependent | 4/8 |
| `int128` | `System.Int128` | 128-bit signed | 16 |
| `uint128` | `System.UInt128` | 128-bit unsigned | 16 |

### Floating-Point Types

| Type | CLR Type | Precision | Bytes |
|------|----------|-----------|-------|
| `half` | `System.Half` | 16-bit float | 2 |
| `float` | `System.Single` | 32-bit float | 4 |
| `double` | `System.Double` | 64-bit float | 8 |
| `decimal` | `System.Decimal` | 128-bit decimal | 16 |

### Other Types

| Type | CLR Type | Description |
|------|----------|-------------|
| `bool` | `System.Boolean` | Boolean value |
| `char` | `System.Char` | Single UTF-16 code unit |

## Implementation

These types use TypeScript's branded types pattern to provide type safety without runtime overhead:

```typescript
export type int = number & { __brand: "int" };
```

The types are distinguishable at compile time but compile down to standard JavaScript primitives. There are no wrapper classes or runtime checks.

## Examples

### Type Safety

```typescript
import { int, long } from "@tsonic/types";

const age: int = 42 as int;
const timestamp: long = Date.now() as long;

// Type error: Type 'long' is not assignable to type 'int'
const invalid: int = timestamp;

// Explicit cast required
const valid: int = timestamp as unknown as int;
```

### Collections

```typescript
import { int, decimal } from "@tsonic/types";

const scores: Array<int> = [95, 87, 92].map(x => x as int);
const prices: Array<decimal> = [9.99, 14.99].map(x => x as decimal);
```

### Function Parameters

```typescript
import { int, bool } from "@tsonic/types";

function setAge(age: int): void {
  console.log(`Age set to ${age}`);
}

function isValid(value: int): bool {
  return (value > 0) as bool;
}

setAge(25 as int);
const result: bool = isValid(10 as int);
```

## License

MIT
