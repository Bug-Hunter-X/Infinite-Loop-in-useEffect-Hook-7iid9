# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite render loop. The `bug.js` file contains the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The `useEffect` hook in `bug.js` attempts to update the `count` state variable within its callback function. This causes an infinite loop because each state update triggers a re-render, which re-executes the `useEffect` hook, leading to another state update, and so on.

## Solution

The `bugSolution.js` file shows the correct approach.  It utilizes the `useRef` hook to track the count, preventing infinite updates.