# @tsonic/runtime

TypeScript type definitions for CLR/.NET runtime primitives.

## Overview

`@tsonic/runtime` provides branded primitive types that match CLR/.NET types, enabling type-safe interop between TypeScript and .NET while remaining compatible with JavaScript primitives at runtime.

## Installation

```bash
npm install @tsonic/runtime
```

## Usage

### Named Imports (Recommended)

```typescript
import { int, decimal, bool, long } from "@tsonic/runtime";

const age: int = 42 as int;
const price: decimal = 99.99 as decimal;
const isActive: bool = true as bool;
const timestamp: long = Date.now() as long;
```

### Global/Ambient Types

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@tsonic/runtime/global"]
  }
}
```

Or use a triple-slash reference:

```typescript
/// <reference types="@tsonic/runtime/global" />

const count: int = 10 as int;  // No import needed
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

## How It Works

These types use TypeScript's branded types pattern:

```typescript
export type int = number & { __brand: "int" };
```

This provides:
- ✅ **Type safety** - `int` and `long` are not interchangeable
- ✅ **Runtime compatibility** - Still JavaScript `number` at runtime
- ✅ **Zero overhead** - No runtime wrappers or classes
- ✅ **IDE support** - Full autocomplete and type checking

## Examples

### Type Safety

```typescript
import { int, long } from "@tsonic/runtime";

const age: int = 42 as int;
const timestamp: long = Date.now() as long;

// ❌ Type error: Type 'long' is not assignable to type 'int'
const invalid: int = timestamp;

// ✅ Explicit cast required
const valid: int = timestamp as unknown as int;
```

### Collections

```typescript
import { int, decimal } from "@tsonic/runtime";

const scores: Array<int> = [95, 87, 92].map(x => x as int);
const prices: Array<decimal> = [9.99, 14.99].map(x => x as decimal);
```

### Function Parameters

```typescript
import { int, bool } from "@tsonic/runtime";

function setAge(age: int): void {
  console.log(`Age set to ${age}`);
}

function isValid(value: int): bool {
  return (value > 0) as bool;
}

setAge(25 as int);
const result: bool = isValid(10 as int);
```

## TypeScript Configuration

For best results, configure TypeScript:

```json
{
  "compilerOptions": {
    "strict": true,
    "types": ["@tsonic/runtime/global"]
  }
}
```

## License

MIT

## Related Projects

- [Tsonic](https://github.com/tsoniclang/tsonic) - TypeScript to C# compiler
- [tsbindgen](https://github.com/tsoniclang/tsbindgen) - TypeScript declaration generator for .NET assemblies
