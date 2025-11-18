/**
 * @tsonic/runtime
 *
 * TypeScript type definitions for CLR/.NET runtime primitives.
 * These branded types provide type safety while remaining compatible with JavaScript primitives.
 *
 * @example
 * ```typescript
 * import { int, decimal, bool } from "@tsonic/runtime";
 *
 * const age: int = 42 as int;
 * const price: decimal = 99.99 as decimal;
 * const isActive: bool = true as bool;
 * ```
 */

// Signed integer types
export type sbyte = number & { __brand: "sbyte" };   // System.SByte (-128 to 127)
export type short = number & { __brand: "short" };   // System.Int16 (-32,768 to 32,767)
export type int = number & { __brand: "int" };       // System.Int32 (-2,147,483,648 to 2,147,483,647)
export type long = number & { __brand: "long" };     // System.Int64 (approx -9.2e18 to 9.2e18)
export type nint = number & { __brand: "nint" };     // System.IntPtr (native int)
export type int128 = number & { __brand: "int128" }; // System.Int128 (128-bit signed)

// Unsigned integer types
export type byte = number & { __brand: "byte" };     // System.Byte (0 to 255)
export type ushort = number & { __brand: "ushort" }; // System.UInt16 (0 to 65,535)
export type uint = number & { __brand: "uint" };     // System.UInt32 (0 to 4,294,967,295)
export type ulong = number & { __brand: "ulong" };   // System.UInt64 (approx 0 to 1.8e19)
export type nuint = number & { __brand: "nuint" };   // System.UIntPtr (native uint)
export type uint128 = number & { __brand: "uint128" }; // System.UInt128 (128-bit unsigned)

// Floating-point types
export type half = number & { __brand: "half" };     // System.Half (16-bit float)
export type float = number & { __brand: "float" };   // System.Single (32-bit float)
export type double = number & { __brand: "double" }; // System.Double (64-bit float)
export type decimal = number & { __brand: "decimal" }; // System.Decimal (128-bit decimal)

// Other primitive types
export type bool = boolean & { __brand: "bool" };    // System.Boolean
export type char = string & { __brand: "char" };     // System.Char (single UTF-16 code unit)
