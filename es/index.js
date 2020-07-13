var ENV = process.env.NODE_ENV;

if (ENV !== "production" && ENV !== "test" && typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  // tslint:disable-next-line:no-console
  console.warn("You are using a whole package of react-effect");
} // export { default as Button } from "./button/index"
// export { default as List } from "./list/index"
// export { default as Switch } from "./switch/index"


export { default as touchEffect } from "./touch-effect/index";