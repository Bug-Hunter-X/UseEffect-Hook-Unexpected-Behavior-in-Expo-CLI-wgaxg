# useEffect Hook Unexpected Behavior in Expo CLI

This repository demonstrates an unexpected behavior encountered while using the `useEffect` hook within an Expo managed workflow application. The issue relates to the timing and frequency of useEffect executions, specifically when dealing with component mounting and state updates. The expected behavior is clearly defined but the actual behavior deviates.

## Bug Description
The primary issue is that the `useEffect` hook with an empty dependency array ([]), intended for execution only once upon component mounting, fires multiple times.  Similarly, the second `useEffect` hook, designed to track state changes, shows inconsistencies in its execution timing. This results in unexpected console outputs and potentially erroneous application behavior.

## Steps to Reproduce
1. Clone this repository.
2. Navigate to the project directory using the terminal.
3. Run `expo start` to start the development server.
4. Observe the console logs to see the inconsistent behavior of the `useEffect` hooks.

## Expected vs. Actual Behavior
* **Expected:** The useEffect with [] should log 'Mounted!' only once. The other useEffect should log 'Count changed:' each time the count changes.
* **Actual:** Both useEffects show inconsistent and unexpected log behavior.

## Potential Causes
Several factors might contribute to this problem, including:
* Incorrect dependency array usage in useEffect.
* Asynchronous operations within the useEffect functions.
* Bugs within Expo CLI or related React Native packages.

## Solution
The solution involves a careful review of the useEffect dependencies and ensuring that no unexpected re-renders trigger unnecessary useEffect executions.  The code in `bugSolution.js` demonstrates the corrected implementation.
