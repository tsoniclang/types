/**
 * @tsonic/types - Global/Ambient Declarations
 *
 * Use this for ambient/global type availability without explicit imports.
 *
 * IMPORTANT: These are simple type aliases with NO runtime enforcement.
 * TypeScript treats all numeric types as `number`, bool as `boolean`, etc.
 * Tsonic enforces semantic correctness at compile time via its proof system.
 *
 * TypeScript will NOT catch type errors between int/byte/long etc.
 * Only Tsonic compilation validates numeric correctness.
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
declare type sbyte = number;    // System.SByte (-128 to 127)
declare type short = number;    // System.Int16 (-32,768 to 32,767)
declare type int = number;      // System.Int32 (-2,147,483,648 to 2,147,483,647)
declare type long = number;     // System.Int64 (approx -9.2e18 to 9.2e18)
declare type nint = number;     // System.IntPtr (native int)
declare type int128 = number;   // System.Int128 (128-bit signed)

// Unsigned integer types
declare type byte = number;     // System.Byte (0 to 255)
declare type ushort = number;   // System.UInt16 (0 to 65,535)
declare type uint = number;     // System.UInt32 (0 to 4,294,967,295)
declare type ulong = number;    // System.UInt64 (approx 0 to 1.8e19)
declare type nuint = number;    // System.UIntPtr (native uint)
declare type uint128 = number;  // System.UInt128 (128-bit unsigned)

// Floating-point types
declare type half = number;     // System.Half (16-bit float)
declare type float = number;    // System.Single (32-bit float)
declare type double = number;   // System.Double (64-bit float)
declare type decimal = number;  // System.Decimal (128-bit decimal)

// Other primitive types
declare type bool = boolean;    // System.Boolean
declare type char = string;     // System.Char (single UTF-16 code unit)
                                // Tsonic enforces char must be length-1 literal or proven conversion

// Pointer type
declare type ptr<T> = unknown;  // C# unsafe pointer types (T*, void*, int*, etc.)

// NOTE: ref<T>, out<T>, In<T> have been removed.
// Parameter modifiers will be expressed via syntax, not types.
// See spec for forthcoming ref/out/in parameter syntax.

export {};
