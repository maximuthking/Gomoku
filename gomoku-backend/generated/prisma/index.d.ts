
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameRecord
 * 
 */
export type GameRecord = $Result.DefaultSelection<Prisma.$GameRecordPayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoomStatus: {
  WAITING: 'WAITING',
  PLAYING: 'PLAYING',
  FINISHED: 'FINISHED'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const GameStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]

}

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameRecord`: Exposes CRUD operations for the **GameRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRecords
    * const gameRecords = await prisma.gameRecord.findMany()
    * ```
    */
  get gameRecord(): Prisma.GameRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Room: 'Room',
    Game: 'Game',
    GameRecord: 'GameRecord',
    UserStats: 'UserStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "game" | "gameRecord" | "userStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameRecord: {
        payload: Prisma.$GameRecordPayload<ExtArgs>
        fields: Prisma.GameRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          findFirst: {
            args: Prisma.GameRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          findMany: {
            args: Prisma.GameRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          create: {
            args: Prisma.GameRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          createMany: {
            args: Prisma.GameRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          delete: {
            args: Prisma.GameRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          update: {
            args: Prisma.GameRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          deleteMany: {
            args: Prisma.GameRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          upsert: {
            args: Prisma.GameRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          aggregate: {
            args: Prisma.GameRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRecord>
          }
          groupBy: {
            args: Prisma.GameRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GameRecordCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    game?: GameOmit
    gameRecord?: GameRecordOmit
    userStats?: UserStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stats: number
    gameRecordsWon: number
    gameRecordsLost: number
    gameRecordsBlack: number
    gameRecordsWhite: number
    gamesAsBlack: number
    gamesAsWhite: number
    gamesWon: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | UserCountOutputTypeCountStatsArgs
    gameRecordsWon?: boolean | UserCountOutputTypeCountGameRecordsWonArgs
    gameRecordsLost?: boolean | UserCountOutputTypeCountGameRecordsLostArgs
    gameRecordsBlack?: boolean | UserCountOutputTypeCountGameRecordsBlackArgs
    gameRecordsWhite?: boolean | UserCountOutputTypeCountGameRecordsWhiteArgs
    gamesAsBlack?: boolean | UserCountOutputTypeCountGamesAsBlackArgs
    gamesAsWhite?: boolean | UserCountOutputTypeCountGamesAsWhiteArgs
    gamesWon?: boolean | UserCountOutputTypeCountGamesWonArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameRecordsWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameRecordsLostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameRecordsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameRecordsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    players: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | RoomCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    nickname: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    nickname: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    email: number
    name: number
    nickname: number
    profileImage: number
    createdAt: number
    updatedAt: number
    roomId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    nickname?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    nickname?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    nickname?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string
    email: string
    name: string
    nickname: string | null
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    roomId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    nickname?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    stats?: boolean | User$statsArgs<ExtArgs>
    gameRecordsWon?: boolean | User$gameRecordsWonArgs<ExtArgs>
    gameRecordsLost?: boolean | User$gameRecordsLostArgs<ExtArgs>
    gameRecordsBlack?: boolean | User$gameRecordsBlackArgs<ExtArgs>
    gameRecordsWhite?: boolean | User$gameRecordsWhiteArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    currentGame?: boolean | User$currentGameArgs<ExtArgs>
    gamesAsBlack?: boolean | User$gamesAsBlackArgs<ExtArgs>
    gamesAsWhite?: boolean | User$gamesAsWhiteArgs<ExtArgs>
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    nickname?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    room?: boolean | User$roomArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    nickname?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    room?: boolean | User$roomArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    nickname?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "email" | "name" | "nickname" | "profileImage" | "createdAt" | "updatedAt" | "roomId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | User$statsArgs<ExtArgs>
    gameRecordsWon?: boolean | User$gameRecordsWonArgs<ExtArgs>
    gameRecordsLost?: boolean | User$gameRecordsLostArgs<ExtArgs>
    gameRecordsBlack?: boolean | User$gameRecordsBlackArgs<ExtArgs>
    gameRecordsWhite?: boolean | User$gameRecordsWhiteArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    currentGame?: boolean | User$currentGameArgs<ExtArgs>
    gamesAsBlack?: boolean | User$gamesAsBlackArgs<ExtArgs>
    gamesAsWhite?: boolean | User$gamesAsWhiteArgs<ExtArgs>
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | User$roomArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | User$roomArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stats: Prisma.$UserStatsPayload<ExtArgs>[]
      gameRecordsWon: Prisma.$GameRecordPayload<ExtArgs>[]
      gameRecordsLost: Prisma.$GameRecordPayload<ExtArgs>[]
      gameRecordsBlack: Prisma.$GameRecordPayload<ExtArgs>[]
      gameRecordsWhite: Prisma.$GameRecordPayload<ExtArgs>[]
      room: Prisma.$RoomPayload<ExtArgs> | null
      currentGame: Prisma.$GamePayload<ExtArgs> | null
      gamesAsBlack: Prisma.$GamePayload<ExtArgs>[]
      gamesAsWhite: Prisma.$GamePayload<ExtArgs>[]
      gamesWon: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string
      email: string
      name: string
      nickname: string | null
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
      roomId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stats<T extends User$statsArgs<ExtArgs> = {}>(args?: Subset<T, User$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameRecordsWon<T extends User$gameRecordsWonArgs<ExtArgs> = {}>(args?: Subset<T, User$gameRecordsWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameRecordsLost<T extends User$gameRecordsLostArgs<ExtArgs> = {}>(args?: Subset<T, User$gameRecordsLostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameRecordsBlack<T extends User$gameRecordsBlackArgs<ExtArgs> = {}>(args?: Subset<T, User$gameRecordsBlackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameRecordsWhite<T extends User$gameRecordsWhiteArgs<ExtArgs> = {}>(args?: Subset<T, User$gameRecordsWhiteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends User$roomArgs<ExtArgs> = {}>(args?: Subset<T, User$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentGame<T extends User$currentGameArgs<ExtArgs> = {}>(args?: Subset<T, User$currentGameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gamesAsBlack<T extends User$gamesAsBlackArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesAsBlackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsWhite<T extends User$gamesAsWhiteArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesAsWhiteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesWon<T extends User$gamesWonArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly roomId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.stats
   */
  export type User$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    cursor?: UserStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * User.gameRecordsWon
   */
  export type User$gameRecordsWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    cursor?: GameRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * User.gameRecordsLost
   */
  export type User$gameRecordsLostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    cursor?: GameRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * User.gameRecordsBlack
   */
  export type User$gameRecordsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    cursor?: GameRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * User.gameRecordsWhite
   */
  export type User$gameRecordsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    cursor?: GameRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * User.room
   */
  export type User$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * User.currentGame
   */
  export type User$currentGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * User.gamesAsBlack
   */
  export type User$gamesAsBlackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsWhite
   */
  export type User$gamesAsWhiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesWon
   */
  export type User$gamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    status: $Enums.RoomStatus
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    players?: boolean | Room$playersArgs<ExtArgs>
    game?: boolean | Room$gameArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Room$playersArgs<ExtArgs>
    game?: boolean | Room$gameArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      players: Prisma.$UserPayload<ExtArgs>[]
      game: Prisma.$GamePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.RoomStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Room$playersArgs<ExtArgs> = {}>(args?: Subset<T, Room$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game<T extends Room$gameArgs<ExtArgs> = {}>(args?: Subset<T, Room$gameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.players
   */
  export type Room$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Room.game
   */
  export type Room$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    currentPlayerId: string | null
    blackPlayerId: string | null
    whitePlayerId: string | null
    winnerId: string | null
    status: $Enums.GameStatus | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    currentPlayerId: string | null
    blackPlayerId: string | null
    whitePlayerId: string | null
    winnerId: string | null
    status: $Enums.GameStatus | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    board: number
    currentPlayerId: number
    blackPlayerId: number
    whitePlayerId: number
    winnerId: number
    status: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    currentPlayerId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    winnerId?: true
    status?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    currentPlayerId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    winnerId?: true
    status?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    board?: true
    currentPlayerId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    winnerId?: true
    status?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    board: JsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    winnerId: string | null
    status: $Enums.GameStatus
    roomId: string
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board?: boolean
    currentPlayerId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    winnerId?: boolean
    status?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board?: boolean
    currentPlayerId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    winnerId?: boolean
    status?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board?: boolean
    currentPlayerId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    winnerId?: boolean
    status?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    board?: boolean
    currentPlayerId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    winnerId?: boolean
    status?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "board" | "currentPlayerId" | "blackPlayerId" | "whitePlayerId" | "winnerId" | "status" | "roomId" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    currentPlayer?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      currentPlayer: Prisma.$UserPayload<ExtArgs>
      blackPlayer: Prisma.$UserPayload<ExtArgs>
      whitePlayer: Prisma.$UserPayload<ExtArgs>
      winner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      board: Prisma.JsonValue
      currentPlayerId: string
      blackPlayerId: string
      whitePlayerId: string
      winnerId: string | null
      status: $Enums.GameStatus
      roomId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentPlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blackPlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    whitePlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends Game$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Game$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly board: FieldRef<"Game", 'Json'>
    readonly currentPlayerId: FieldRef<"Game", 'String'>
    readonly blackPlayerId: FieldRef<"Game", 'String'>
    readonly whitePlayerId: FieldRef<"Game", 'String'>
    readonly winnerId: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly roomId: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.winner
   */
  export type Game$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameRecord
   */

  export type AggregateGameRecord = {
    _count: GameRecordCountAggregateOutputType | null
    _avg: GameRecordAvgAggregateOutputType | null
    _sum: GameRecordSumAggregateOutputType | null
    _min: GameRecordMinAggregateOutputType | null
    _max: GameRecordMaxAggregateOutputType | null
  }

  export type GameRecordAvgAggregateOutputType = {
    moveCount: number | null
  }

  export type GameRecordSumAggregateOutputType = {
    moveCount: number | null
  }

  export type GameRecordMinAggregateOutputType = {
    id: string | null
    gameType: string | null
    winnerId: string | null
    loserId: string | null
    blackPlayerId: string | null
    whitePlayerId: string | null
    moveCount: number | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameRecordMaxAggregateOutputType = {
    id: string | null
    gameType: string | null
    winnerId: string | null
    loserId: string | null
    blackPlayerId: string | null
    whitePlayerId: string | null
    moveCount: number | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameRecordCountAggregateOutputType = {
    id: number
    gameType: number
    winnerId: number
    loserId: number
    blackPlayerId: number
    whitePlayerId: number
    moveCount: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type GameRecordAvgAggregateInputType = {
    moveCount?: true
  }

  export type GameRecordSumAggregateInputType = {
    moveCount?: true
  }

  export type GameRecordMinAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    loserId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    moveCount?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameRecordMaxAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    loserId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    moveCount?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameRecordCountAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    loserId?: true
    blackPlayerId?: true
    whitePlayerId?: true
    moveCount?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type GameRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRecord to aggregate.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRecords
    **/
    _count?: true | GameRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRecordMaxAggregateInputType
  }

  export type GetGameRecordAggregateType<T extends GameRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRecord[P]>
      : GetScalarType<T[P], AggregateGameRecord[P]>
  }




  export type GameRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithAggregationInput | GameRecordOrderByWithAggregationInput[]
    by: GameRecordScalarFieldEnum[] | GameRecordScalarFieldEnum
    having?: GameRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRecordCountAggregateInputType | true
    _avg?: GameRecordAvgAggregateInputType
    _sum?: GameRecordSumAggregateInputType
    _min?: GameRecordMinAggregateInputType
    _max?: GameRecordMaxAggregateInputType
  }

  export type GameRecordGroupByOutputType = {
    id: string
    gameType: string
    winnerId: string
    loserId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt: Date
    endedAt: Date
    _count: GameRecordCountAggregateOutputType | null
    _avg: GameRecordAvgAggregateOutputType | null
    _sum: GameRecordSumAggregateOutputType | null
    _min: GameRecordMinAggregateOutputType | null
    _max: GameRecordMaxAggregateOutputType | null
  }

  type GetGameRecordGroupByPayload<T extends GameRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GameRecordGroupByOutputType[P]>
        }
      >
    >


  export type GameRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    loserId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    moveCount?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    loserId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    moveCount?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    loserId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    moveCount?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectScalar = {
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    loserId?: boolean
    blackPlayerId?: boolean
    whitePlayerId?: boolean
    moveCount?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type GameRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameType" | "winnerId" | "loserId" | "blackPlayerId" | "whitePlayerId" | "moveCount" | "startedAt" | "endedAt", ExtArgs["result"]["gameRecord"]>
  export type GameRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | UserDefaultArgs<ExtArgs>
    loser?: boolean | UserDefaultArgs<ExtArgs>
    blackPlayer?: boolean | UserDefaultArgs<ExtArgs>
    whitePlayer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRecord"
    objects: {
      winner: Prisma.$UserPayload<ExtArgs>
      loser: Prisma.$UserPayload<ExtArgs>
      blackPlayer: Prisma.$UserPayload<ExtArgs>
      whitePlayer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameType: string
      winnerId: string
      loserId: string
      blackPlayerId: string
      whitePlayerId: string
      moveCount: number
      startedAt: Date
      endedAt: Date
    }, ExtArgs["result"]["gameRecord"]>
    composites: {}
  }

  type GameRecordGetPayload<S extends boolean | null | undefined | GameRecordDefaultArgs> = $Result.GetResult<Prisma.$GameRecordPayload, S>

  type GameRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameRecordCountAggregateInputType | true
    }

  export interface GameRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRecord'], meta: { name: 'GameRecord' } }
    /**
     * Find zero or one GameRecord that matches the filter.
     * @param {GameRecordFindUniqueArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRecordFindUniqueArgs>(args: SelectSubset<T, GameRecordFindUniqueArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameRecordFindUniqueOrThrowArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindFirstArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRecordFindFirstArgs>(args?: SelectSubset<T, GameRecordFindFirstArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindFirstOrThrowArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRecords
     * const gameRecords = await prisma.gameRecord.findMany()
     * 
     * // Get first 10 GameRecords
     * const gameRecords = await prisma.gameRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRecordFindManyArgs>(args?: SelectSubset<T, GameRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameRecord.
     * @param {GameRecordCreateArgs} args - Arguments to create a GameRecord.
     * @example
     * // Create one GameRecord
     * const GameRecord = await prisma.gameRecord.create({
     *   data: {
     *     // ... data to create a GameRecord
     *   }
     * })
     * 
     */
    create<T extends GameRecordCreateArgs>(args: SelectSubset<T, GameRecordCreateArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameRecords.
     * @param {GameRecordCreateManyArgs} args - Arguments to create many GameRecords.
     * @example
     * // Create many GameRecords
     * const gameRecord = await prisma.gameRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRecordCreateManyArgs>(args?: SelectSubset<T, GameRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRecords and returns the data saved in the database.
     * @param {GameRecordCreateManyAndReturnArgs} args - Arguments to create many GameRecords.
     * @example
     * // Create many GameRecords
     * const gameRecord = await prisma.gameRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRecords and only return the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameRecord.
     * @param {GameRecordDeleteArgs} args - Arguments to delete one GameRecord.
     * @example
     * // Delete one GameRecord
     * const GameRecord = await prisma.gameRecord.delete({
     *   where: {
     *     // ... filter to delete one GameRecord
     *   }
     * })
     * 
     */
    delete<T extends GameRecordDeleteArgs>(args: SelectSubset<T, GameRecordDeleteArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameRecord.
     * @param {GameRecordUpdateArgs} args - Arguments to update one GameRecord.
     * @example
     * // Update one GameRecord
     * const gameRecord = await prisma.gameRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRecordUpdateArgs>(args: SelectSubset<T, GameRecordUpdateArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameRecords.
     * @param {GameRecordDeleteManyArgs} args - Arguments to filter GameRecords to delete.
     * @example
     * // Delete a few GameRecords
     * const { count } = await prisma.gameRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRecordDeleteManyArgs>(args?: SelectSubset<T, GameRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRecords
     * const gameRecord = await prisma.gameRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRecordUpdateManyArgs>(args: SelectSubset<T, GameRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRecords and returns the data updated in the database.
     * @param {GameRecordUpdateManyAndReturnArgs} args - Arguments to update many GameRecords.
     * @example
     * // Update many GameRecords
     * const gameRecord = await prisma.gameRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameRecords and only return the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GameRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameRecord.
     * @param {GameRecordUpsertArgs} args - Arguments to update or create a GameRecord.
     * @example
     * // Update or create a GameRecord
     * const gameRecord = await prisma.gameRecord.upsert({
     *   create: {
     *     // ... data to create a GameRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRecord we want to update
     *   }
     * })
     */
    upsert<T extends GameRecordUpsertArgs>(args: SelectSubset<T, GameRecordUpsertArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordCountArgs} args - Arguments to filter GameRecords to count.
     * @example
     * // Count the number of GameRecords
     * const count = await prisma.gameRecord.count({
     *   where: {
     *     // ... the filter for the GameRecords we want to count
     *   }
     * })
    **/
    count<T extends GameRecordCountArgs>(
      args?: Subset<T, GameRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameRecordAggregateArgs>(args: Subset<T, GameRecordAggregateArgs>): Prisma.PrismaPromise<GetGameRecordAggregateType<T>>

    /**
     * Group by GameRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRecordGroupByArgs['orderBy'] }
        : { orderBy?: GameRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRecord model
   */
  readonly fields: GameRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blackPlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    whitePlayer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRecord model
   */
  interface GameRecordFieldRefs {
    readonly id: FieldRef<"GameRecord", 'String'>
    readonly gameType: FieldRef<"GameRecord", 'String'>
    readonly winnerId: FieldRef<"GameRecord", 'String'>
    readonly loserId: FieldRef<"GameRecord", 'String'>
    readonly blackPlayerId: FieldRef<"GameRecord", 'String'>
    readonly whitePlayerId: FieldRef<"GameRecord", 'String'>
    readonly moveCount: FieldRef<"GameRecord", 'Int'>
    readonly startedAt: FieldRef<"GameRecord", 'DateTime'>
    readonly endedAt: FieldRef<"GameRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameRecord findUnique
   */
  export type GameRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord findUniqueOrThrow
   */
  export type GameRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord findFirst
   */
  export type GameRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRecords.
     */
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord findFirstOrThrow
   */
  export type GameRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRecords.
     */
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord findMany
   */
  export type GameRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecords to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord create
   */
  export type GameRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRecord.
     */
    data: XOR<GameRecordCreateInput, GameRecordUncheckedCreateInput>
  }

  /**
   * GameRecord createMany
   */
  export type GameRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRecords.
     */
    data: GameRecordCreateManyInput | GameRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameRecord createManyAndReturn
   */
  export type GameRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GameRecords.
     */
    data: GameRecordCreateManyInput | GameRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRecord update
   */
  export type GameRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRecord.
     */
    data: XOR<GameRecordUpdateInput, GameRecordUncheckedUpdateInput>
    /**
     * Choose, which GameRecord to update.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord updateMany
   */
  export type GameRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRecords.
     */
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyInput>
    /**
     * Filter which GameRecords to update
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to update.
     */
    limit?: number
  }

  /**
   * GameRecord updateManyAndReturn
   */
  export type GameRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * The data used to update GameRecords.
     */
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyInput>
    /**
     * Filter which GameRecords to update
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRecord upsert
   */
  export type GameRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRecord to update in case it exists.
     */
    where: GameRecordWhereUniqueInput
    /**
     * In case the GameRecord found by the `where` argument doesn't exist, create a new GameRecord with this data.
     */
    create: XOR<GameRecordCreateInput, GameRecordUncheckedCreateInput>
    /**
     * In case the GameRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRecordUpdateInput, GameRecordUncheckedUpdateInput>
  }

  /**
   * GameRecord delete
   */
  export type GameRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter which GameRecord to delete.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord deleteMany
   */
  export type GameRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRecords to delete
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to delete.
     */
    limit?: number
  }

  /**
   * GameRecord without action
   */
  export type GameRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalPlays: number | null
    wins: number | null
    losses: number | null
    winsAsBlack: number | null
    winsAsWhite: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalPlays: number | null
    wins: number | null
    losses: number | null
    winsAsBlack: number | null
    winsAsWhite: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameType: string | null
    totalPlays: number | null
    wins: number | null
    losses: number | null
    winsAsBlack: number | null
    winsAsWhite: number | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameType: string | null
    totalPlays: number | null
    wins: number | null
    losses: number | null
    winsAsBlack: number | null
    winsAsWhite: number | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    userId: number
    gameType: number
    totalPlays: number
    wins: number
    losses: number
    winsAsBlack: number
    winsAsWhite: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalPlays?: true
    wins?: true
    losses?: true
    winsAsBlack?: true
    winsAsWhite?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalPlays?: true
    wins?: true
    losses?: true
    winsAsBlack?: true
    winsAsWhite?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    userId?: true
    gameType?: true
    totalPlays?: true
    wins?: true
    losses?: true
    winsAsBlack?: true
    winsAsWhite?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    gameType?: true
    totalPlays?: true
    wins?: true
    losses?: true
    winsAsBlack?: true
    winsAsWhite?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    userId?: true
    gameType?: true
    totalPlays?: true
    wins?: true
    losses?: true
    winsAsBlack?: true
    winsAsWhite?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    userId: string
    gameType: string
    totalPlays: number
    wins: number
    losses: number
    winsAsBlack: number
    winsAsWhite: number
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameType?: boolean
    totalPlays?: boolean
    wins?: boolean
    losses?: boolean
    winsAsBlack?: boolean
    winsAsWhite?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameType?: boolean
    totalPlays?: boolean
    wins?: boolean
    losses?: boolean
    winsAsBlack?: boolean
    winsAsWhite?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameType?: boolean
    totalPlays?: boolean
    wins?: boolean
    losses?: boolean
    winsAsBlack?: boolean
    winsAsWhite?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    gameType?: boolean
    totalPlays?: boolean
    wins?: boolean
    losses?: boolean
    winsAsBlack?: boolean
    winsAsWhite?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameType" | "totalPlays" | "wins" | "losses" | "winsAsBlack" | "winsAsWhite", ExtArgs["result"]["userStats"]>
  export type UserStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameType: string
      totalPlays: number
      wins: number
      losses: number
      winsAsBlack: number
      winsAsWhite: number
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly gameType: FieldRef<"UserStats", 'String'>
    readonly totalPlays: FieldRef<"UserStats", 'Int'>
    readonly wins: FieldRef<"UserStats", 'Int'>
    readonly losses: FieldRef<"UserStats", 'Int'>
    readonly winsAsBlack: FieldRef<"UserStats", 'Int'>
    readonly winsAsWhite: FieldRef<"UserStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    email: 'email',
    name: 'name',
    nickname: 'nickname',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roomId: 'roomId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    board: 'board',
    currentPlayerId: 'currentPlayerId',
    blackPlayerId: 'blackPlayerId',
    whitePlayerId: 'whitePlayerId',
    winnerId: 'winnerId',
    status: 'status',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameRecordScalarFieldEnum: {
    id: 'id',
    gameType: 'gameType',
    winnerId: 'winnerId',
    loserId: 'loserId',
    blackPlayerId: 'blackPlayerId',
    whitePlayerId: 'whitePlayerId',
    moveCount: 'moveCount',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type GameRecordScalarFieldEnum = (typeof GameRecordScalarFieldEnum)[keyof typeof GameRecordScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameType: 'gameType',
    totalPlays: 'totalPlays',
    wins: 'wins',
    losses: 'losses',
    winsAsBlack: 'winsAsBlack',
    winsAsWhite: 'winsAsWhite'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
    stats?: UserStatsListRelationFilter
    gameRecordsWon?: GameRecordListRelationFilter
    gameRecordsLost?: GameRecordListRelationFilter
    gameRecordsBlack?: GameRecordListRelationFilter
    gameRecordsWhite?: GameRecordListRelationFilter
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    currentGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    gamesAsBlack?: GameListRelationFilter
    gamesAsWhite?: GameListRelationFilter
    gamesWon?: GameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    stats?: UserStatsOrderByRelationAggregateInput
    gameRecordsWon?: GameRecordOrderByRelationAggregateInput
    gameRecordsLost?: GameRecordOrderByRelationAggregateInput
    gameRecordsBlack?: GameRecordOrderByRelationAggregateInput
    gameRecordsWhite?: GameRecordOrderByRelationAggregateInput
    room?: RoomOrderByWithRelationInput
    currentGame?: GameOrderByWithRelationInput
    gamesAsBlack?: GameOrderByRelationAggregateInput
    gamesAsWhite?: GameOrderByRelationAggregateInput
    gamesWon?: GameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    nickname?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
    stats?: UserStatsListRelationFilter
    gameRecordsWon?: GameRecordListRelationFilter
    gameRecordsLost?: GameRecordListRelationFilter
    gameRecordsBlack?: GameRecordListRelationFilter
    gameRecordsWhite?: GameRecordListRelationFilter
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    currentGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    gamesAsBlack?: GameListRelationFilter
    gamesAsWhite?: GameListRelationFilter
    gamesWon?: GameListRelationFilter
  }, "id" | "googleId" | "email" | "nickname">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    roomId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    players?: UserListRelationFilter
    game?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    players?: UserOrderByRelationAggregateInput
    game?: GameOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    players?: UserListRelationFilter
    game?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    board?: JsonFilter<"Game">
    currentPlayerId?: StringFilter<"Game"> | string
    blackPlayerId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    roomId?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    currentPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    board?: SortOrder
    currentPlayerId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    status?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    currentPlayer?: UserOrderByWithRelationInput
    blackPlayer?: UserOrderByWithRelationInput
    whitePlayer?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentPlayerId?: string
    roomId?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    board?: JsonFilter<"Game">
    blackPlayerId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    currentPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "currentPlayerId" | "roomId">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    board?: SortOrder
    currentPlayerId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    status?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    board?: JsonWithAggregatesFilter<"Game">
    currentPlayerId?: StringWithAggregatesFilter<"Game"> | string
    blackPlayerId?: StringWithAggregatesFilter<"Game"> | string
    whitePlayerId?: StringWithAggregatesFilter<"Game"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    roomId?: StringWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type GameRecordWhereInput = {
    AND?: GameRecordWhereInput | GameRecordWhereInput[]
    OR?: GameRecordWhereInput[]
    NOT?: GameRecordWhereInput | GameRecordWhereInput[]
    id?: StringFilter<"GameRecord"> | string
    gameType?: StringFilter<"GameRecord"> | string
    winnerId?: StringFilter<"GameRecord"> | string
    loserId?: StringFilter<"GameRecord"> | string
    blackPlayerId?: StringFilter<"GameRecord"> | string
    whitePlayerId?: StringFilter<"GameRecord"> | string
    moveCount?: IntFilter<"GameRecord"> | number
    startedAt?: DateTimeFilter<"GameRecord"> | Date | string
    endedAt?: DateTimeFilter<"GameRecord"> | Date | string
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
    loser?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameRecordOrderByWithRelationInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    moveCount?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winner?: UserOrderByWithRelationInput
    loser?: UserOrderByWithRelationInput
    blackPlayer?: UserOrderByWithRelationInput
    whitePlayer?: UserOrderByWithRelationInput
  }

  export type GameRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameRecordWhereInput | GameRecordWhereInput[]
    OR?: GameRecordWhereInput[]
    NOT?: GameRecordWhereInput | GameRecordWhereInput[]
    gameType?: StringFilter<"GameRecord"> | string
    winnerId?: StringFilter<"GameRecord"> | string
    loserId?: StringFilter<"GameRecord"> | string
    blackPlayerId?: StringFilter<"GameRecord"> | string
    whitePlayerId?: StringFilter<"GameRecord"> | string
    moveCount?: IntFilter<"GameRecord"> | number
    startedAt?: DateTimeFilter<"GameRecord"> | Date | string
    endedAt?: DateTimeFilter<"GameRecord"> | Date | string
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
    loser?: XOR<UserScalarRelationFilter, UserWhereInput>
    blackPlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
    whitePlayer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GameRecordOrderByWithAggregationInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    moveCount?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    _count?: GameRecordCountOrderByAggregateInput
    _avg?: GameRecordAvgOrderByAggregateInput
    _max?: GameRecordMaxOrderByAggregateInput
    _min?: GameRecordMinOrderByAggregateInput
    _sum?: GameRecordSumOrderByAggregateInput
  }

  export type GameRecordScalarWhereWithAggregatesInput = {
    AND?: GameRecordScalarWhereWithAggregatesInput | GameRecordScalarWhereWithAggregatesInput[]
    OR?: GameRecordScalarWhereWithAggregatesInput[]
    NOT?: GameRecordScalarWhereWithAggregatesInput | GameRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameRecord"> | string
    gameType?: StringWithAggregatesFilter<"GameRecord"> | string
    winnerId?: StringWithAggregatesFilter<"GameRecord"> | string
    loserId?: StringWithAggregatesFilter<"GameRecord"> | string
    blackPlayerId?: StringWithAggregatesFilter<"GameRecord"> | string
    whitePlayerId?: StringWithAggregatesFilter<"GameRecord"> | string
    moveCount?: IntWithAggregatesFilter<"GameRecord"> | number
    startedAt?: DateTimeWithAggregatesFilter<"GameRecord"> | Date | string
    endedAt?: DateTimeWithAggregatesFilter<"GameRecord"> | Date | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    gameType?: StringFilter<"UserStats"> | string
    totalPlays?: IntFilter<"UserStats"> | number
    wins?: IntFilter<"UserStats"> | number
    losses?: IntFilter<"UserStats"> | number
    winsAsBlack?: IntFilter<"UserStats"> | number
    winsAsWhite?: IntFilter<"UserStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameType?: SortOrder
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameType?: UserStatsUserIdGameTypeCompoundUniqueInput
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    userId?: StringFilter<"UserStats"> | string
    gameType?: StringFilter<"UserStats"> | string
    totalPlays?: IntFilter<"UserStats"> | number
    wins?: IntFilter<"UserStats"> | number
    losses?: IntFilter<"UserStats"> | number
    winsAsBlack?: IntFilter<"UserStats"> | number
    winsAsWhite?: IntFilter<"UserStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_gameType">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameType?: SortOrder
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    gameType?: StringWithAggregatesFilter<"UserStats"> | string
    totalPlays?: IntWithAggregatesFilter<"UserStats"> | number
    wins?: IntWithAggregatesFilter<"UserStats"> | number
    losses?: IntWithAggregatesFilter<"UserStats"> | number
    winsAsBlack?: IntWithAggregatesFilter<"UserStats"> | number
    winsAsWhite?: IntWithAggregatesFilter<"UserStats"> | number
  }

  export type UserCreateInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: UserCreateNestedManyWithoutRoomInput
    game?: GameCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: UserUncheckedCreateNestedManyWithoutRoomInput
    game?: GameUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUpdateManyWithoutRoomNestedInput
    game?: GameUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUncheckedUpdateManyWithoutRoomNestedInput
    game?: GameUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutGameInput
    currentPlayer: UserCreateNestedOneWithoutCurrentGameInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGameNestedInput
    currentPlayer?: UserUpdateOneRequiredWithoutCurrentGameNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordCreateInput = {
    id?: string
    gameType: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
    winner: UserCreateNestedOneWithoutGameRecordsWonInput
    loser: UserCreateNestedOneWithoutGameRecordsLostInput
    blackPlayer: UserCreateNestedOneWithoutGameRecordsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGameRecordsWhiteInput
  }

  export type GameRecordUncheckedCreateInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneRequiredWithoutGameRecordsWonNestedInput
    loser?: UserUpdateOneRequiredWithoutGameRecordsLostNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGameRecordsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGameRecordsWhiteNestedInput
  }

  export type GameRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordCreateManyInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateInput = {
    id?: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
    user: UserCreateNestedOneWithoutStatsInput
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    userId: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStatsNestedInput
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type UserStatsCreateManyInput = {
    id?: string
    userId: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserStatsListRelationFilter = {
    every?: UserStatsWhereInput
    some?: UserStatsWhereInput
    none?: UserStatsWhereInput
  }

  export type GameRecordListRelationFilter = {
    every?: GameRecordWhereInput
    some?: GameRecordWhereInput
    none?: GameRecordWhereInput
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type GameNullableScalarRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    board?: SortOrder
    currentPlayerId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    winnerId?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    currentPlayerId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    winnerId?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    currentPlayerId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    winnerId?: SortOrder
    status?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameRecordCountOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    moveCount?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameRecordAvgOrderByAggregateInput = {
    moveCount?: SortOrder
  }

  export type GameRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    moveCount?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameRecordMinOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    blackPlayerId?: SortOrder
    whitePlayerId?: SortOrder
    moveCount?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameRecordSumOrderByAggregateInput = {
    moveCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserStatsUserIdGameTypeCompoundUniqueInput = {
    userId: string
    gameType: string
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameType?: SortOrder
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameType?: SortOrder
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameType?: SortOrder
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalPlays?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    winsAsBlack?: SortOrder
    winsAsWhite?: SortOrder
  }

  export type UserStatsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type GameRecordCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput> | GameRecordCreateWithoutWinnerInput[] | GameRecordUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWinnerInput | GameRecordCreateOrConnectWithoutWinnerInput[]
    createMany?: GameRecordCreateManyWinnerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordCreateNestedManyWithoutLoserInput = {
    create?: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput> | GameRecordCreateWithoutLoserInput[] | GameRecordUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutLoserInput | GameRecordCreateOrConnectWithoutLoserInput[]
    createMany?: GameRecordCreateManyLoserInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput> | GameRecordCreateWithoutBlackPlayerInput[] | GameRecordUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutBlackPlayerInput | GameRecordCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameRecordCreateManyBlackPlayerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput> | GameRecordCreateWithoutWhitePlayerInput[] | GameRecordUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWhitePlayerInput | GameRecordCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameRecordCreateManyWhitePlayerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type RoomCreateNestedOneWithoutPlayersInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    connect?: RoomWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutCurrentPlayerInput = {
    create?: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameCreateOrConnectWithoutCurrentPlayerInput
    connect?: GameWhereUniqueInput
  }

  export type GameCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type GameRecordUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput> | GameRecordCreateWithoutWinnerInput[] | GameRecordUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWinnerInput | GameRecordCreateOrConnectWithoutWinnerInput[]
    createMany?: GameRecordCreateManyWinnerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordUncheckedCreateNestedManyWithoutLoserInput = {
    create?: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput> | GameRecordCreateWithoutLoserInput[] | GameRecordUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutLoserInput | GameRecordCreateOrConnectWithoutLoserInput[]
    createMany?: GameRecordCreateManyLoserInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput> | GameRecordCreateWithoutBlackPlayerInput[] | GameRecordUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutBlackPlayerInput | GameRecordCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameRecordCreateManyBlackPlayerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput> | GameRecordCreateWithoutWhitePlayerInput[] | GameRecordUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWhitePlayerInput | GameRecordCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameRecordCreateManyWhitePlayerInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedOneWithoutCurrentPlayerInput = {
    create?: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameCreateOrConnectWithoutCurrentPlayerInput
    connect?: GameWhereUniqueInput
  }

  export type GameUncheckedCreateNestedManyWithoutBlackPlayerInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutWhitePlayerInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserStatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutUserInput | UserStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutUserInput | UserStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutUserInput | UserStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type GameRecordUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput> | GameRecordCreateWithoutWinnerInput[] | GameRecordUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWinnerInput | GameRecordCreateOrConnectWithoutWinnerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutWinnerInput | GameRecordUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameRecordCreateManyWinnerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutWinnerInput | GameRecordUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutWinnerInput | GameRecordUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUpdateManyWithoutLoserNestedInput = {
    create?: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput> | GameRecordCreateWithoutLoserInput[] | GameRecordUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutLoserInput | GameRecordCreateOrConnectWithoutLoserInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutLoserInput | GameRecordUpsertWithWhereUniqueWithoutLoserInput[]
    createMany?: GameRecordCreateManyLoserInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutLoserInput | GameRecordUpdateWithWhereUniqueWithoutLoserInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutLoserInput | GameRecordUpdateManyWithWhereWithoutLoserInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput> | GameRecordCreateWithoutBlackPlayerInput[] | GameRecordUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutBlackPlayerInput | GameRecordCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutBlackPlayerInput | GameRecordUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameRecordCreateManyBlackPlayerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutBlackPlayerInput | GameRecordUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutBlackPlayerInput | GameRecordUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput> | GameRecordCreateWithoutWhitePlayerInput[] | GameRecordUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWhitePlayerInput | GameRecordCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutWhitePlayerInput | GameRecordUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameRecordCreateManyWhitePlayerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutWhitePlayerInput | GameRecordUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutWhitePlayerInput | GameRecordUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type RoomUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    upsert?: RoomUpsertWithoutPlayersInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPlayersInput, RoomUpdateWithoutPlayersInput>, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateOneWithoutCurrentPlayerNestedInput = {
    create?: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameCreateOrConnectWithoutCurrentPlayerInput
    upsert?: GameUpsertWithoutCurrentPlayerInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutCurrentPlayerInput, GameUpdateWithoutCurrentPlayerInput>, GameUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type GameUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutBlackPlayerInput | GameUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutBlackPlayerInput | GameUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutBlackPlayerInput | GameUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWhitePlayerInput | GameUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWhitePlayerInput | GameUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWhitePlayerInput | GameUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutUserInput | UserStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutUserInput | UserStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutUserInput | UserStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type GameRecordUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput> | GameRecordCreateWithoutWinnerInput[] | GameRecordUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWinnerInput | GameRecordCreateOrConnectWithoutWinnerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutWinnerInput | GameRecordUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameRecordCreateManyWinnerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutWinnerInput | GameRecordUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutWinnerInput | GameRecordUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUncheckedUpdateManyWithoutLoserNestedInput = {
    create?: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput> | GameRecordCreateWithoutLoserInput[] | GameRecordUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutLoserInput | GameRecordCreateOrConnectWithoutLoserInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutLoserInput | GameRecordUpsertWithWhereUniqueWithoutLoserInput[]
    createMany?: GameRecordCreateManyLoserInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutLoserInput | GameRecordUpdateWithWhereUniqueWithoutLoserInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutLoserInput | GameRecordUpdateManyWithWhereWithoutLoserInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput> | GameRecordCreateWithoutBlackPlayerInput[] | GameRecordUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutBlackPlayerInput | GameRecordCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutBlackPlayerInput | GameRecordUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameRecordCreateManyBlackPlayerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutBlackPlayerInput | GameRecordUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutBlackPlayerInput | GameRecordUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput> | GameRecordCreateWithoutWhitePlayerInput[] | GameRecordUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutWhitePlayerInput | GameRecordCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutWhitePlayerInput | GameRecordUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameRecordCreateManyWhitePlayerInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutWhitePlayerInput | GameRecordUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutWhitePlayerInput | GameRecordUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput = {
    create?: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
    connectOrCreate?: GameCreateOrConnectWithoutCurrentPlayerInput
    upsert?: GameUpsertWithoutCurrentPlayerInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutCurrentPlayerInput, GameUpdateWithoutCurrentPlayerInput>, GameUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type GameUncheckedUpdateManyWithoutBlackPlayerNestedInput = {
    create?: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput> | GameCreateWithoutBlackPlayerInput[] | GameUncheckedCreateWithoutBlackPlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutBlackPlayerInput | GameCreateOrConnectWithoutBlackPlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutBlackPlayerInput | GameUpsertWithWhereUniqueWithoutBlackPlayerInput[]
    createMany?: GameCreateManyBlackPlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutBlackPlayerInput | GameUpdateWithWhereUniqueWithoutBlackPlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutBlackPlayerInput | GameUpdateManyWithWhereWithoutBlackPlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutWhitePlayerNestedInput = {
    create?: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput> | GameCreateWithoutWhitePlayerInput[] | GameUncheckedCreateWithoutWhitePlayerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWhitePlayerInput | GameCreateOrConnectWithoutWhitePlayerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWhitePlayerInput | GameUpsertWithWhereUniqueWithoutWhitePlayerInput[]
    createMany?: GameCreateManyWhitePlayerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWhitePlayerInput | GameUpdateWithWhereUniqueWithoutWhitePlayerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWhitePlayerInput | GameUpdateManyWithWhereWithoutWhitePlayerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GameCreateNestedOneWithoutRoomInput = {
    create?: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GameCreateOrConnectWithoutRoomInput
    connect?: GameWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GameCreateOrConnectWithoutRoomInput
    connect?: GameWhereUniqueInput
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type UserUpdateManyWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomInput | UserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomInput | UserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomInput | UserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GameUpdateOneWithoutRoomNestedInput = {
    create?: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GameCreateOrConnectWithoutRoomInput
    upsert?: GameUpsertWithoutRoomInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutRoomInput, GameUpdateWithoutRoomInput>, GameUncheckedUpdateWithoutRoomInput>
  }

  export type UserUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomInput | UserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomInput | UserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomInput | UserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GameUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GameCreateOrConnectWithoutRoomInput
    upsert?: GameUpsertWithoutRoomInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutRoomInput, GameUpdateWithoutRoomInput>, GameUncheckedUpdateWithoutRoomInput>
  }

  export type RoomCreateNestedOneWithoutGameInput = {
    create?: XOR<RoomCreateWithoutGameInput, RoomUncheckedCreateWithoutGameInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGameInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCurrentGameInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsBlackInput = {
    create?: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsBlackInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsWhiteInput = {
    create?: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsWhiteInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesWonInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type RoomUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<RoomCreateWithoutGameInput, RoomUncheckedCreateWithoutGameInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGameInput
    upsert?: RoomUpsertWithoutGameInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutGameInput, RoomUpdateWithoutGameInput>, RoomUncheckedUpdateWithoutGameInput>
  }

  export type UserUpdateOneRequiredWithoutCurrentGameNestedInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput
    upsert?: UserUpsertWithoutCurrentGameInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurrentGameInput, UserUpdateWithoutCurrentGameInput>, UserUncheckedUpdateWithoutCurrentGameInput>
  }

  export type UserUpdateOneRequiredWithoutGamesAsBlackNestedInput = {
    create?: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsBlackInput
    upsert?: UserUpsertWithoutGamesAsBlackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsBlackInput, UserUpdateWithoutGamesAsBlackInput>, UserUncheckedUpdateWithoutGamesAsBlackInput>
  }

  export type UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput = {
    create?: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsWhiteInput
    upsert?: UserUpsertWithoutGamesAsWhiteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsWhiteInput, UserUpdateWithoutGamesAsWhiteInput>, UserUncheckedUpdateWithoutGamesAsWhiteInput>
  }

  export type UserUpdateOneWithoutGamesWonNestedInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    upsert?: UserUpsertWithoutGamesWonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesWonInput, UserUpdateWithoutGamesWonInput>, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type UserCreateNestedOneWithoutGameRecordsWonInput = {
    create?: XOR<UserCreateWithoutGameRecordsWonInput, UserUncheckedCreateWithoutGameRecordsWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsWonInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameRecordsLostInput = {
    create?: XOR<UserCreateWithoutGameRecordsLostInput, UserUncheckedCreateWithoutGameRecordsLostInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsLostInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameRecordsBlackInput = {
    create?: XOR<UserCreateWithoutGameRecordsBlackInput, UserUncheckedCreateWithoutGameRecordsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsBlackInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameRecordsWhiteInput = {
    create?: XOR<UserCreateWithoutGameRecordsWhiteInput, UserUncheckedCreateWithoutGameRecordsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsWhiteInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGameRecordsWonNestedInput = {
    create?: XOR<UserCreateWithoutGameRecordsWonInput, UserUncheckedCreateWithoutGameRecordsWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsWonInput
    upsert?: UserUpsertWithoutGameRecordsWonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameRecordsWonInput, UserUpdateWithoutGameRecordsWonInput>, UserUncheckedUpdateWithoutGameRecordsWonInput>
  }

  export type UserUpdateOneRequiredWithoutGameRecordsLostNestedInput = {
    create?: XOR<UserCreateWithoutGameRecordsLostInput, UserUncheckedCreateWithoutGameRecordsLostInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsLostInput
    upsert?: UserUpsertWithoutGameRecordsLostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameRecordsLostInput, UserUpdateWithoutGameRecordsLostInput>, UserUncheckedUpdateWithoutGameRecordsLostInput>
  }

  export type UserUpdateOneRequiredWithoutGameRecordsBlackNestedInput = {
    create?: XOR<UserCreateWithoutGameRecordsBlackInput, UserUncheckedCreateWithoutGameRecordsBlackInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsBlackInput
    upsert?: UserUpsertWithoutGameRecordsBlackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameRecordsBlackInput, UserUpdateWithoutGameRecordsBlackInput>, UserUncheckedUpdateWithoutGameRecordsBlackInput>
  }

  export type UserUpdateOneRequiredWithoutGameRecordsWhiteNestedInput = {
    create?: XOR<UserCreateWithoutGameRecordsWhiteInput, UserUncheckedCreateWithoutGameRecordsWhiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsWhiteInput
    upsert?: UserUpsertWithoutGameRecordsWhiteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameRecordsWhiteInput, UserUpdateWithoutGameRecordsWhiteInput>, UserUncheckedUpdateWithoutGameRecordsWhiteInput>
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserStatsCreateWithoutUserInput = {
    id?: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
  }

  export type UserStatsUncheckedCreateWithoutUserInput = {
    id?: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
  }

  export type UserStatsCreateOrConnectWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type UserStatsCreateManyUserInputEnvelope = {
    data: UserStatsCreateManyUserInput | UserStatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameRecordCreateWithoutWinnerInput = {
    id?: string
    gameType: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
    loser: UserCreateNestedOneWithoutGameRecordsLostInput
    blackPlayer: UserCreateNestedOneWithoutGameRecordsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGameRecordsWhiteInput
  }

  export type GameRecordUncheckedCreateWithoutWinnerInput = {
    id?: string
    gameType: string
    loserId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateOrConnectWithoutWinnerInput = {
    where: GameRecordWhereUniqueInput
    create: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput>
  }

  export type GameRecordCreateManyWinnerInputEnvelope = {
    data: GameRecordCreateManyWinnerInput | GameRecordCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type GameRecordCreateWithoutLoserInput = {
    id?: string
    gameType: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
    winner: UserCreateNestedOneWithoutGameRecordsWonInput
    blackPlayer: UserCreateNestedOneWithoutGameRecordsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGameRecordsWhiteInput
  }

  export type GameRecordUncheckedCreateWithoutLoserInput = {
    id?: string
    gameType: string
    winnerId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateOrConnectWithoutLoserInput = {
    where: GameRecordWhereUniqueInput
    create: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput>
  }

  export type GameRecordCreateManyLoserInputEnvelope = {
    data: GameRecordCreateManyLoserInput | GameRecordCreateManyLoserInput[]
    skipDuplicates?: boolean
  }

  export type GameRecordCreateWithoutBlackPlayerInput = {
    id?: string
    gameType: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
    winner: UserCreateNestedOneWithoutGameRecordsWonInput
    loser: UserCreateNestedOneWithoutGameRecordsLostInput
    whitePlayer: UserCreateNestedOneWithoutGameRecordsWhiteInput
  }

  export type GameRecordUncheckedCreateWithoutBlackPlayerInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateOrConnectWithoutBlackPlayerInput = {
    where: GameRecordWhereUniqueInput
    create: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameRecordCreateManyBlackPlayerInputEnvelope = {
    data: GameRecordCreateManyBlackPlayerInput | GameRecordCreateManyBlackPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameRecordCreateWithoutWhitePlayerInput = {
    id?: string
    gameType: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
    winner: UserCreateNestedOneWithoutGameRecordsWonInput
    loser: UserCreateNestedOneWithoutGameRecordsLostInput
    blackPlayer: UserCreateNestedOneWithoutGameRecordsBlackInput
  }

  export type GameRecordUncheckedCreateWithoutWhitePlayerInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    blackPlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateOrConnectWithoutWhitePlayerInput = {
    where: GameRecordWhereUniqueInput
    create: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameRecordCreateManyWhitePlayerInputEnvelope = {
    data: GameRecordCreateManyWhitePlayerInput | GameRecordCreateManyWhitePlayerInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPlayersInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    game?: GameCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    game?: GameUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPlayersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
  }

  export type GameCreateWithoutCurrentPlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutGameInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutCurrentPlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    blackPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutCurrentPlayerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
  }

  export type GameCreateWithoutBlackPlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutGameInput
    currentPlayer: UserCreateNestedOneWithoutCurrentGameInput
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutBlackPlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameCreateManyBlackPlayerInputEnvelope = {
    data: GameCreateManyBlackPlayerInput | GameCreateManyBlackPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutWhitePlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutGameInput
    currentPlayer: UserCreateNestedOneWithoutCurrentGameInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutWhitePlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameCreateManyWhitePlayerInputEnvelope = {
    data: GameCreateManyWhitePlayerInput | GameCreateManyWhitePlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutWinnerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutGameInput
    currentPlayer: UserCreateNestedOneWithoutCurrentGameInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
  }

  export type GameUncheckedCreateWithoutWinnerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutWinnerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameCreateManyWinnerInputEnvelope = {
    data: GameCreateManyWinnerInput | GameCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    update: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type UserStatsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    data: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatsUpdateManyWithWhereWithoutUserInput = {
    where: UserStatsScalarWhereInput
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStatsScalarWhereInput = {
    AND?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
    OR?: UserStatsScalarWhereInput[]
    NOT?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    gameType?: StringFilter<"UserStats"> | string
    totalPlays?: IntFilter<"UserStats"> | number
    wins?: IntFilter<"UserStats"> | number
    losses?: IntFilter<"UserStats"> | number
    winsAsBlack?: IntFilter<"UserStats"> | number
    winsAsWhite?: IntFilter<"UserStats"> | number
  }

  export type GameRecordUpsertWithWhereUniqueWithoutWinnerInput = {
    where: GameRecordWhereUniqueInput
    update: XOR<GameRecordUpdateWithoutWinnerInput, GameRecordUncheckedUpdateWithoutWinnerInput>
    create: XOR<GameRecordCreateWithoutWinnerInput, GameRecordUncheckedCreateWithoutWinnerInput>
  }

  export type GameRecordUpdateWithWhereUniqueWithoutWinnerInput = {
    where: GameRecordWhereUniqueInput
    data: XOR<GameRecordUpdateWithoutWinnerInput, GameRecordUncheckedUpdateWithoutWinnerInput>
  }

  export type GameRecordUpdateManyWithWhereWithoutWinnerInput = {
    where: GameRecordScalarWhereInput
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyWithoutWinnerInput>
  }

  export type GameRecordScalarWhereInput = {
    AND?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
    OR?: GameRecordScalarWhereInput[]
    NOT?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
    id?: StringFilter<"GameRecord"> | string
    gameType?: StringFilter<"GameRecord"> | string
    winnerId?: StringFilter<"GameRecord"> | string
    loserId?: StringFilter<"GameRecord"> | string
    blackPlayerId?: StringFilter<"GameRecord"> | string
    whitePlayerId?: StringFilter<"GameRecord"> | string
    moveCount?: IntFilter<"GameRecord"> | number
    startedAt?: DateTimeFilter<"GameRecord"> | Date | string
    endedAt?: DateTimeFilter<"GameRecord"> | Date | string
  }

  export type GameRecordUpsertWithWhereUniqueWithoutLoserInput = {
    where: GameRecordWhereUniqueInput
    update: XOR<GameRecordUpdateWithoutLoserInput, GameRecordUncheckedUpdateWithoutLoserInput>
    create: XOR<GameRecordCreateWithoutLoserInput, GameRecordUncheckedCreateWithoutLoserInput>
  }

  export type GameRecordUpdateWithWhereUniqueWithoutLoserInput = {
    where: GameRecordWhereUniqueInput
    data: XOR<GameRecordUpdateWithoutLoserInput, GameRecordUncheckedUpdateWithoutLoserInput>
  }

  export type GameRecordUpdateManyWithWhereWithoutLoserInput = {
    where: GameRecordScalarWhereInput
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyWithoutLoserInput>
  }

  export type GameRecordUpsertWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameRecordWhereUniqueInput
    update: XOR<GameRecordUpdateWithoutBlackPlayerInput, GameRecordUncheckedUpdateWithoutBlackPlayerInput>
    create: XOR<GameRecordCreateWithoutBlackPlayerInput, GameRecordUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameRecordUpdateWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameRecordWhereUniqueInput
    data: XOR<GameRecordUpdateWithoutBlackPlayerInput, GameRecordUncheckedUpdateWithoutBlackPlayerInput>
  }

  export type GameRecordUpdateManyWithWhereWithoutBlackPlayerInput = {
    where: GameRecordScalarWhereInput
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyWithoutBlackPlayerInput>
  }

  export type GameRecordUpsertWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameRecordWhereUniqueInput
    update: XOR<GameRecordUpdateWithoutWhitePlayerInput, GameRecordUncheckedUpdateWithoutWhitePlayerInput>
    create: XOR<GameRecordCreateWithoutWhitePlayerInput, GameRecordUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameRecordUpdateWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameRecordWhereUniqueInput
    data: XOR<GameRecordUpdateWithoutWhitePlayerInput, GameRecordUncheckedUpdateWithoutWhitePlayerInput>
  }

  export type GameRecordUpdateManyWithWhereWithoutWhitePlayerInput = {
    where: GameRecordScalarWhereInput
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyWithoutWhitePlayerInput>
  }

  export type RoomUpsertWithoutPlayersInput = {
    update: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPlayersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type RoomUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type GameUpsertWithoutCurrentPlayerInput = {
    update: XOR<GameUpdateWithoutCurrentPlayerInput, GameUncheckedUpdateWithoutCurrentPlayerInput>
    create: XOR<GameCreateWithoutCurrentPlayerInput, GameUncheckedCreateWithoutCurrentPlayerInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutCurrentPlayerInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutCurrentPlayerInput, GameUncheckedUpdateWithoutCurrentPlayerInput>
  }

  export type GameUpdateWithoutCurrentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGameNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutCurrentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutBlackPlayerInput, GameUncheckedUpdateWithoutBlackPlayerInput>
    create: XOR<GameCreateWithoutBlackPlayerInput, GameUncheckedCreateWithoutBlackPlayerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutBlackPlayerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutBlackPlayerInput, GameUncheckedUpdateWithoutBlackPlayerInput>
  }

  export type GameUpdateManyWithWhereWithoutBlackPlayerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutBlackPlayerInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    board?: JsonFilter<"Game">
    currentPlayerId?: StringFilter<"Game"> | string
    blackPlayerId?: StringFilter<"Game"> | string
    whitePlayerId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    roomId?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutWhitePlayerInput, GameUncheckedUpdateWithoutWhitePlayerInput>
    create: XOR<GameCreateWithoutWhitePlayerInput, GameUncheckedCreateWithoutWhitePlayerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutWhitePlayerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutWhitePlayerInput, GameUncheckedUpdateWithoutWhitePlayerInput>
  }

  export type GameUpdateManyWithWhereWithoutWhitePlayerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutWhitePlayerInput>
  }

  export type GameUpsertWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
  }

  export type GameUpdateManyWithWhereWithoutWinnerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutWinnerInput>
  }

  export type UserCreateWithoutRoomInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutRoomInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type UserCreateManyRoomInputEnvelope = {
    data: UserCreateManyRoomInput | UserCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutRoomInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    currentPlayer: UserCreateNestedOneWithoutCurrentGameInput
    blackPlayer: UserCreateNestedOneWithoutGamesAsBlackInput
    whitePlayer: UserCreateNestedOneWithoutGamesAsWhiteInput
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutRoomInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutRoomInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoomInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoomInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
  }

  export type UserUpdateManyWithWhereWithoutRoomInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
  }

  export type GameUpsertWithoutRoomInput = {
    update: XOR<GameUpdateWithoutRoomInput, GameUncheckedUpdateWithoutRoomInput>
    create: XOR<GameCreateWithoutRoomInput, GameUncheckedCreateWithoutRoomInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutRoomInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutRoomInput, GameUncheckedUpdateWithoutRoomInput>
  }

  export type GameUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPlayer?: UserUpdateOneRequiredWithoutCurrentGameNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateWithoutGameInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: UserCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutGameInput = {
    id?: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: UserUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutGameInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutGameInput, RoomUncheckedCreateWithoutGameInput>
  }

  export type UserCreateWithoutCurrentGameInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutCurrentGameInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutCurrentGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
  }

  export type UserCreateWithoutGamesAsBlackInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGamesAsBlackInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGamesAsBlackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
  }

  export type UserCreateWithoutGamesAsWhiteInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGamesAsWhiteInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGamesAsWhiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
  }

  export type UserCreateWithoutGamesWonInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
  }

  export type UserUncheckedCreateWithoutGamesWonInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
  }

  export type UserCreateOrConnectWithoutGamesWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
  }

  export type RoomUpsertWithoutGameInput = {
    update: XOR<RoomUpdateWithoutGameInput, RoomUncheckedUpdateWithoutGameInput>
    create: XOR<RoomCreateWithoutGameInput, RoomUncheckedCreateWithoutGameInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutGameInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutGameInput, RoomUncheckedUpdateWithoutGameInput>
  }

  export type RoomUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutCurrentGameInput = {
    update: XOR<UserUpdateWithoutCurrentGameInput, UserUncheckedUpdateWithoutCurrentGameInput>
    create: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurrentGameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurrentGameInput, UserUncheckedUpdateWithoutCurrentGameInput>
  }

  export type UserUpdateWithoutCurrentGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGamesAsBlackInput = {
    update: XOR<UserUpdateWithoutGamesAsBlackInput, UserUncheckedUpdateWithoutGamesAsBlackInput>
    create: XOR<UserCreateWithoutGamesAsBlackInput, UserUncheckedCreateWithoutGamesAsBlackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsBlackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsBlackInput, UserUncheckedUpdateWithoutGamesAsBlackInput>
  }

  export type UserUpdateWithoutGamesAsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGamesAsWhiteInput = {
    update: XOR<UserUpdateWithoutGamesAsWhiteInput, UserUncheckedUpdateWithoutGamesAsWhiteInput>
    create: XOR<UserCreateWithoutGamesAsWhiteInput, UserUncheckedCreateWithoutGamesAsWhiteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsWhiteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsWhiteInput, UserUncheckedUpdateWithoutGamesAsWhiteInput>
  }

  export type UserUpdateWithoutGamesAsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGamesWonInput = {
    update: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type UserUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
  }

  export type UserCreateWithoutGameRecordsWonInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGameRecordsWonInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGameRecordsWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameRecordsWonInput, UserUncheckedCreateWithoutGameRecordsWonInput>
  }

  export type UserCreateWithoutGameRecordsLostInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGameRecordsLostInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGameRecordsLostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameRecordsLostInput, UserUncheckedCreateWithoutGameRecordsLostInput>
  }

  export type UserCreateWithoutGameRecordsBlackInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGameRecordsBlackInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGameRecordsBlackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameRecordsBlackInput, UserUncheckedCreateWithoutGameRecordsBlackInput>
  }

  export type UserCreateWithoutGameRecordsWhiteInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatsCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutGameRecordsWhiteInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    stats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutGameRecordsWhiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameRecordsWhiteInput, UserUncheckedCreateWithoutGameRecordsWhiteInput>
  }

  export type UserUpsertWithoutGameRecordsWonInput = {
    update: XOR<UserUpdateWithoutGameRecordsWonInput, UserUncheckedUpdateWithoutGameRecordsWonInput>
    create: XOR<UserCreateWithoutGameRecordsWonInput, UserUncheckedCreateWithoutGameRecordsWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameRecordsWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameRecordsWonInput, UserUncheckedUpdateWithoutGameRecordsWonInput>
  }

  export type UserUpdateWithoutGameRecordsWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGameRecordsWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGameRecordsLostInput = {
    update: XOR<UserUpdateWithoutGameRecordsLostInput, UserUncheckedUpdateWithoutGameRecordsLostInput>
    create: XOR<UserCreateWithoutGameRecordsLostInput, UserUncheckedCreateWithoutGameRecordsLostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameRecordsLostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameRecordsLostInput, UserUncheckedUpdateWithoutGameRecordsLostInput>
  }

  export type UserUpdateWithoutGameRecordsLostInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGameRecordsLostInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGameRecordsBlackInput = {
    update: XOR<UserUpdateWithoutGameRecordsBlackInput, UserUncheckedUpdateWithoutGameRecordsBlackInput>
    create: XOR<UserCreateWithoutGameRecordsBlackInput, UserUncheckedCreateWithoutGameRecordsBlackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameRecordsBlackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameRecordsBlackInput, UserUncheckedUpdateWithoutGameRecordsBlackInput>
  }

  export type UserUpdateWithoutGameRecordsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGameRecordsBlackInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutGameRecordsWhiteInput = {
    update: XOR<UserUpdateWithoutGameRecordsWhiteInput, UserUncheckedUpdateWithoutGameRecordsWhiteInput>
    create: XOR<UserCreateWithoutGameRecordsWhiteInput, UserUncheckedCreateWithoutGameRecordsWhiteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameRecordsWhiteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameRecordsWhiteInput, UserUncheckedUpdateWithoutGameRecordsWhiteInput>
  }

  export type UserUpdateWithoutGameRecordsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGameRecordsWhiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateWithoutStatsInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameRecordsWon?: GameRecordCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordCreateNestedManyWithoutWhitePlayerInput
    room?: RoomCreateNestedOneWithoutPlayersInput
    currentGame?: GameCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    gameRecordsWon?: GameRecordUncheckedCreateNestedManyWithoutWinnerInput
    gameRecordsLost?: GameRecordUncheckedCreateNestedManyWithoutLoserInput
    gameRecordsBlack?: GameRecordUncheckedCreateNestedManyWithoutBlackPlayerInput
    gameRecordsWhite?: GameRecordUncheckedCreateNestedManyWithoutWhitePlayerInput
    currentGame?: GameUncheckedCreateNestedOneWithoutCurrentPlayerInput
    gamesAsBlack?: GameUncheckedCreateNestedManyWithoutBlackPlayerInput
    gamesAsWhite?: GameUncheckedCreateNestedManyWithoutWhitePlayerInput
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    room?: RoomUpdateOneWithoutPlayersNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserStatsCreateManyUserInput = {
    id?: string
    gameType: string
    totalPlays?: number
    wins?: number
    losses?: number
    winsAsBlack?: number
    winsAsWhite?: number
  }

  export type GameRecordCreateManyWinnerInput = {
    id?: string
    gameType: string
    loserId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateManyLoserInput = {
    id?: string
    gameType: string
    winnerId: string
    blackPlayerId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateManyBlackPlayerInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    whitePlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameRecordCreateManyWhitePlayerInput = {
    id?: string
    gameType: string
    winnerId: string
    loserId: string
    blackPlayerId: string
    moveCount: number
    startedAt?: Date | string
    endedAt: Date | string
  }

  export type GameCreateManyBlackPlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    whitePlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyWhitePlayerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    winnerId?: string | null
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyWinnerInput = {
    id?: string
    board: JsonNullValueInput | InputJsonValue
    currentPlayerId: string
    blackPlayerId: string
    whitePlayerId: string
    status?: $Enums.GameStatus
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type UserStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type UserStatsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    totalPlays?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    winsAsBlack?: IntFieldUpdateOperationsInput | number
    winsAsWhite?: IntFieldUpdateOperationsInput | number
  }

  export type GameRecordUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loser?: UserUpdateOneRequiredWithoutGameRecordsLostNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGameRecordsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGameRecordsWhiteNestedInput
  }

  export type GameRecordUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUpdateWithoutLoserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneRequiredWithoutGameRecordsWonNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGameRecordsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGameRecordsWhiteNestedInput
  }

  export type GameRecordUncheckedUpdateWithoutLoserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyWithoutLoserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneRequiredWithoutGameRecordsWonNestedInput
    loser?: UserUpdateOneRequiredWithoutGameRecordsLostNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGameRecordsWhiteNestedInput
  }

  export type GameRecordUncheckedUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneRequiredWithoutGameRecordsWonNestedInput
    loser?: UserUpdateOneRequiredWithoutGameRecordsLostNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGameRecordsBlackNestedInput
  }

  export type GameRecordUncheckedUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    loserId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    moveCount?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGameNestedInput
    currentPlayer?: UserUpdateOneRequiredWithoutCurrentGameNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutBlackPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGameNestedInput
    currentPlayer?: UserUpdateOneRequiredWithoutCurrentGameNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutWhitePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGameNestedInput
    currentPlayer?: UserUpdateOneRequiredWithoutCurrentGameNestedInput
    blackPlayer?: UserUpdateOneRequiredWithoutGamesAsBlackNestedInput
    whitePlayer?: UserUpdateOneRequiredWithoutGamesAsWhiteNestedInput
  }

  export type GameUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    board?: JsonNullValueInput | InputJsonValue
    currentPlayerId?: StringFieldUpdateOperationsInput | string
    blackPlayerId?: StringFieldUpdateOperationsInput | string
    whitePlayerId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoomInput = {
    id?: string
    googleId: string
    email: string
    name: string
    nickname?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
    gameRecordsWon?: GameRecordUncheckedUpdateManyWithoutWinnerNestedInput
    gameRecordsLost?: GameRecordUncheckedUpdateManyWithoutLoserNestedInput
    gameRecordsBlack?: GameRecordUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gameRecordsWhite?: GameRecordUncheckedUpdateManyWithoutWhitePlayerNestedInput
    currentGame?: GameUncheckedUpdateOneWithoutCurrentPlayerNestedInput
    gamesAsBlack?: GameUncheckedUpdateManyWithoutBlackPlayerNestedInput
    gamesAsWhite?: GameUncheckedUpdateManyWithoutWhitePlayerNestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}