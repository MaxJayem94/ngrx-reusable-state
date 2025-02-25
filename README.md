# NgrxReusableState

This repository demonstrates how to instantiate multiple independent instances of the same NGRX feature using *
*higher-order functions and Injection Tokens**.

## Key Features

- **State Isolation**: Each instance of the counter feature maintains its own independent state.
- **Higher-Order Reducers**: The reducer is dynamically created based on the consumer.
- **Injection Tokens**: Used to provide consumer-specific state and effects.
- **Reusable Effects & Facades**: Ensures scoped interactions with the store.

## Implementation Details

1. **Action Factory**: Generates consumer-specific actions using a function.
2. **Dynamic Reducers**: Each consumer has its own isolated reducer instance.
3. **Scoped Effects**: Effects are uniquely identified using `OnIdentifyEffects`.
4. **Facade Abstraction**: Provides a simple API for interacting with the store.
5. **Router-Based Providers**: State and effects are dynamically injected via Angular route providers.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/MaxJayem94/ngrx-reusable-state.git
   cd ngrx-reusable-state
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Navigate to different routes (`/`, `/products`, `/media`) to see independent counter instances in action.

## License

MIT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
