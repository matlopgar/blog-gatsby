---
date: 2021-11-26
title: Demystify NgRx
description: Angular state manager is not rocket science
category: DEV
background: "#FFC857"
---
# Initial doubts

What is state?

- The application state, is the set of data that affect what you see on the screen

Why not keep Data on Components?

- Chains of inputs and outputs between components, which can be hard to maintain. Data can start to become inconsistent and data flow readability can be compromised

What NgRx does to deal with that?

- NgRx basically controls the data externally to this tree of components and distributes them through Observables.

What is Observable?

- Imagine a telephone transmission line. When someone answers, a person starts listening to the words that are emitted on the line. That transmission line is the **Observable**. Words are the data it emits. The person is the one who subscribes to the transmission line to receive the data, which can be a component, a service, among others.

# Structure

The NgRx framework is based on the Redux architecture and makes strong use of the asynchronous programming library, RxJS.

![Untitled](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

- The application state is on Store
- The state changes are made by actions of the user (*Action*)
- To apply changes requested by the *Action*, we use *Reducer*
- *Reducer* is responsible to produce new states of the application
- And, to deal with external asynchronous calls, we use *Effects*

### Effects

*Effects* is a powerful tool to eliminate leaking component responsibilities

He is listening to the *Action* emitted until he captures the action he will handle. After dealing with external calls, it emits a new Action, usually success or error depending on the result of the external call.

Thinking again in the propose of NgRx, with Effects, your component will just listen data/erros coming from *Store.* Who effectively deal with the api and the response is *Effect*