# ReactApp

## Overview

- Description: A mini project inspired by the [React Tutorial for Beginners](https://www.youtube.com/watch?app=desktop&v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh) YouTube video, designed to teach the basics of React.
- Component tree:
  ![comp tree](images/component-tree.png)

## Setup

1. Start a new Vite project by automating the setup and configuration steps: `npm create vite@4.1.0`
   - project creation tool: Vite
   - framework: React
   - variant: Typescript
2. (For project isolation) create & activate a virtual environment (dependencies are installed within the virtual environment other than system-wide & all subsequent steps will be performed within the virtual environment):
   ```
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Install all the dependencies and devDependencies listed in the `package.json` file: `npm install` or `npm i`
4. Install the Bootstrap library: `npm i bootstrap@5.3.3`
5. Run a development web server for the projec: `npm run dev`

## Notes

1. How React works?

   | Component Tree: | Virtual DOM: | Actual DOM: |
   | --------------- | ------------ | ----------- |
   | App (root)      | `<div>`      | `<div>`     |
   | Message (child) | `<h1>`       | `<h1>`      |

   - When the state of a component changes, React updates the corresponding node in the virtural DOM to reflect the new state.
   - Then it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated in the actual DOM.
   - Updating the DOM is done by React DOM (the companion library).

2. Framework vs. library (React)?

   - Framework is a comprehensive set of tools and components that provides a structure and often enforces certain patterns and best practices.You build your application around the framework (eg: React for front-end development) -> house structure with a predefined layout
   - Library is a collection of pre-written code that you can use to perform common tasks. Unlike a framework, a library doesn't dictate the structure of your application. You call the library's code from your application. -> a toolbox

3. React ecosystem:
   - Building components:
     - Note: a React component cannot return more than one element unless wrapped all children with <div></div> or <Fragment></Fragment> or `<></>` to create a single parent element.
     - JSX expressions must have one parent element.
   - Render list in markup with JSX:
     - JSX (JavaScript XML) is a syntactic sugar for function calls and object creation in JavaScript.
     - In JSX, we can only use html elements or other React components.
   - Conditional rendering:
     - true && 1 -> 1
     - true && "Qingying" -> "Qingying"
     - false && "Qingying" -> false (no rendering on screen)
   - Manage state changes:
     - using **_state hooks_** in the format **_[variable, updater_function]_**
     - Note: each component instance maintains its own state (independent of each other)
   - Props (properties) make component reusable:
     - Pass data to components via props
     - Pass function(s) to components via props
   - State vs. props:
     - State: data managed by a component (similar to local variables)
     - Props: input passed to a component (similar to func arguments)
     - Difference: State is mutable on purpose (data can change over time) while props are immutable (cannot be changed)
     - Common: Anytime they change will re-render the component, and update the DOM accordingly.
   - Pass a child component (`Alert.tsx`) to the root component (`App.tsx`)
   - Pass long text or html content as a child to the component
   - React developer tools:

- React dev tools:
  - View component tree via the React Dev Tools extension:
    ![view comp tree](images/view-comp-tree.png)
  - Search a component:
    ![search a comp](images/search-comp.png)
  - Inspect matching DOM element:
    ![inspect matching DOM elmt](images/inspect-elmt.png)
  - View component source code:
    ![view comp source code](images/view-source-code.png)

## Quick reviews:

1. React **_components_** are the building blocks of React applications. They are **_reusable_** pieces of code that use properties (props) to receive data and functions.
2. The **_component tree_** is a hierarchical structure that represents how components are composed together in a React application.
3. **_React's rendering mechanism_**: React uses a virtual DOM to efficiently update the actual DOM. When a component's state or props change, React creates a new virtual DOM tree and compares it with the previous one. It then calculates the minimal set of changes required and applies those changes to the actual DOM, a process known as reconciliation. This approach makes updates faster and more efficient compared to directly manipulating the DOM.
4. State vs. props:
   - State: data managed by a component (similar to local variables)
   - Props: input passed to a component (similar to func arguments)
   - Difference: State is mutable on purpose (data can change over time) while props are immutable (cannot be changed)
   - Common: Anytime they change will re-render the component, and update the DOM accordingly.
5. JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript files. Components decide what to render based on their state and props.

## Resources

1. [Tutorial video](https://www.youtube.com/watch?app=desktop&v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh)
2. [Bootstrap | Components](https://getbootstrap.com/)
3. [Bootstrap | dismiss an alert](https://getbootstrap.com/docs/5.3/components/alerts/#dismissing)
