/**
 * @tsonic/types - Global/Ambient Declarations
 *
 * Use this for ambient/global type availability without explicit imports.
 *
 * Usage in tsconfig.json:
 * ```json
 * {
 *   "compilerOptions": {
 *     "types": ["@tsonic/types/global"]
 *   }
 * }
 * ```
 *
 * Or via triple-slash reference:
 * ```typescript
 * /// <reference types="@tsonic/types/global" />
 * ```
 */

// Signed integer types
declare type sbyte = number & { __brand: "sbyte" };   // System.SByte (-128 to 127)
declare type short = number & { __brand: "short" };   // System.Int16 (-32,768 to 32,767)
declare type int = number & { __brand: "int" };       // System.Int32 (-2,147,483,648 to 2,147,483,647)
declare type long = number & { __brand: "long" };     // System.Int64 (approx -9.2e18 to 9.2e18)
declare type nint = number & { __brand: "nint" };     // System.IntPtr (native int)
declare type int128 = number & { __brand: "int128" }; // System.Int128 (128-bit signed)

// Unsigned integer types
declare type byte = number & { __brand: "byte" };     // System.Byte (0 to 255)
declare type ushort = number & { __brand: "ushort" }; // System.UInt16 (0 to 65,535)
declare type uint = number & { __brand: "uint" };     // System.UInt32 (0 to 4,294,967,295)
declare type ulong = number & { __brand: "ulong" };   // System.UInt64 (approx 0 to 1.8e19)
declare type nuint = number & { __brand: "nuint" };   // System.UIntPtr (native uint)
declare type uint128 = number & { __brand: "uint128" }; // System.UInt128 (128-bit unsigned)

// Floating-point types
declare type half = number & { __brand: "half" };     // System.Half (16-bit float)
declare type float = number & { __brand: "float" };   // System.Single (32-bit float)
declare type double = number & { __brand: "double" }; // System.Double (64-bit float)
declare type decimal = number & { __brand: "decimal" }; // System.Decimal (128-bit decimal)

// Other primitive types
declare type bool = boolean & { __brand: "bool" };    // System.Boolean
declare type char = string & { __brand: "char" };     // System.Char (single UTF-16 code unit)

export {};
