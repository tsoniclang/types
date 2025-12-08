/**
 * @tsonic/types
 *
 * TypeScript type definitions for CLR/.NET runtime primitives.
 *
 * IMPORTANT: These are simple type aliases, NOT branded types.
 * TypeScript treats all numeric types as `number` - this is intentional.
 * Tsonic enforces numeric correctness at compile time via a proof system,
 * independent of TypeScript's structural typing.
 *
 * @example
 * ```typescript
 * import { int, float, bool } from "@tsonic/types";
 *
 * const age: int = 42 as int;      // Tsonic validates 42 fits in Int32
 * const temp: float = 98.6 as float; // Tsonic validates for Single
 * const isActive: bool = true as bool;
 * ```
 */

// Signed integer types
export type sbyte = number;    // System.SByte (-128 to 127)
export type short = number;    // System.Int16 (-32,768 to 32,767)
export type int = number;      // System.Int32 (-2,147,483,648 to 2,147,483,647)
export type long = number;     // System.Int64 (approx -9.2e18 to 9.2e18)
export type nint = number;     // System.IntPtr (native int)
export type int128 = number;   // System.Int128 (128-bit signed)

// Unsigned integer types
export type byte = number;     // System.Byte (0 to 255)
export type ushort = number;   // System.UInt16 (0 to 65,535)
export type uint = number;     // System.UInt32 (0 to 4,294,967,295)
export type ulong = number;    // System.UInt64 (approx 0 to 1.8e19)
export type nuint = number;    // System.UIntPtr (native uint)
export type uint128 = number;  // System.UInt128 (128-bit unsigned)

// Floating-point types
export type half = number;     // System.Half (16-bit float)
export type float = number;    // System.Single (32-bit float)
export type double = number;   // System.Double (64-bit float)
export type decimal = number;  // System.Decimal (128-bit decimal)

// Other primitive types
export type bool = boolean & { __brand: "bool" };    // System.Boolean
export type char = string & { __brand: "char" };     // System.Char (single UTF-16 code unit)

// Parameter modifiers (ref/out/in)
// These phantom types tell the compiler to emit ref/out/in modifiers in C#
// Uses different phantom properties to avoid collision with __brand
export type ref<T> = T & { __ref?: never };          // ref parameter modifier
export type out<T> = T & { __out?: never };          // out parameter modifier
export type In<T> = T & { __in?: never };            // in parameter modifier (readonly ref)

// Pointer type
// Represents C# unsafe pointer types (T*, void*, int*, etc.)
// Erases to unknown for type safety - requires explicit handling
// Uses required brand to prevent accidental assignment
export type ptr<T> = unknown & { readonly __ptr: unique symbol };
