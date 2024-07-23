# Traffic Meister

## Link to application

[https://traffic-meister-lemon.vercel.app/](https://traffic-meister-lemon.vercel.app/)

## Stack

[Next.js](https://www.npmjs.com/package/next) 14 (App Router approach)

[TypeScript](https://www.npmjs.com/package/typescript) v5

Styles approach: module [SCSS](https://www.npmjs.com/package/sass)

Tests: [Cypress](https://www.npmjs.com/package/cypress) for e2e tests, [Jest](https://www.npmjs.com/package/jest) and [Testing library](https://www.npmjs.com/package/@testing-library/react) for unit tests

API: [axios](https://www.npmjs.com/package/axios)

State manangement (Store): [zustand](https://www.npmjs.com/package/zustand)

Linters and formatters: [eslint](https://www.npmjs.com/package/eslint) and [prettier](https://www.npmjs.com/package/prettier)

Supported and compatible across all devices, beginning with screens as narrow as 320px in width

---

## Explanations

I fulfilled all the requirements and additionaly implemented out of scope functionality:

- select/unselect vehicle
- implemented 3 different filtering logics with selectable options Strict, Mid-strict, Not strict
- deployed the application to Vercel and provided a link to the app for convenient evaluation
- used TypeScript
- made a real data request instead of a static method to emulate real API behavior

Filters logic explanation:

- Strict. After selecting an option for one filter, `we can only clear that filter option and then select a new one`. The result of the 3 filters will be displayed at the bottom based on the applied filters.

- Mid-strict. After selecting an option for one filter, `we can select another option for that filter, the options that will be shown for that filter take into account the filtering of already selected filters`. The result of the 3 filters will be displayed at the bottom based on the applied filters.

- Not-strict. Query-based filter. We always display all options for all filters. The result of the 3 filters will be displayed at the bottom based on the applied filters `and can contain 0 elements`.

Link to Github repo with commit history: [https://github.com/viktarrudzenia/traffic-meister](https://github.com/viktarrudzenia/traffic-meister)

---

## Coding Assignment Evaluation Answers

### **Assignment**

- Does the code work.

> Yes. To start the project locally, clone this repo, install dependencies using the command `npm install`, and run the `npm run dev` command. The application will run on `localhost:3000` by default.

- Does the code still work when encountering edge cases.

> Yes. I created and used a custom Error Boundary (TmErrorBoundary) to be able to wrap any Component within the project. Also, I used the built-in Next.js `error.tsx` page in the app folder to prevent edge cases.

- Does the code come with instructions.

> Yes, I left comments where they should have been. Although I followed the rule that it is better to write code and name variables, components and functions so that comments are not needed to understand the code

- Do all included artifacts have purpose.

> Yes, I didn’t add anything extra library or dependency to the project so as not to overload it. I have a reason and explanation for each library that is used in the project

---

### **Code quality**

- Is the code structured in a logical way.

> Yes, the code is structured in a logical manner. I'm confident that the structure of the code contributes significantly to its clarity and maintainability.

- Could the code be extended.

> Yes, The code is designed with extensibility in mind. Its structure make it easy to extend functionality without introducing significant complexity.

- Do functions, classes and modules use the right level of abstraction.

> Yes, I tried to balance between detail and completeness for functions, classes, and modules to be appropriately abstracted.

- Does the code show software engineering best practices and design patterns where applicable.

> Yes, the code I wrote follows software development best practices and includes appropriate design patterns where possible.

- Is the code consistent.

> Yes, the code remains consistent throughout. Consistent naming conventions, coding style, and design patterns are applied throughout the code base, ensuring clarity and maintainability.

- Does the code contain descriptive names.

> Yes, I'm very careful about code readability, so the code uses descriptive names for functions, variables, components, etc. to enhance readability and understanding of the purpose and functionality of the code.

- Is the code production ready.

> Yes, the code is production-ready. Prevents any edge cases, no extra code, made so that it already works and supports all device sizes starting from 320 pixels wide.

- Does the code base scale to a bigger feature set.

> Yes, the code base is designed to scale efficiently to accommodate a larger set of features. Its modular architecture and flexible design enable seamless integration of additional features without sacrificing performance or serviceability.

Some details about structre:
>
> 1. The `components` folder contains folders with components by functionality, which will help conveniently scale the application and components folder. Now inside components there is a `shared` folder, which stores all the simple components that can be used throughout the application. And the `trafficMeister` folder - which contains all the components needed for the trafficMeister functionality with filters and display. As soon as we need to create new functionality and pages, we can create a folder by functionality and put components there.
>
> 2. The `layout` folder contains components that are used to divide the application into parts, such as Header, Footer, Content and AppWrapper.
We can easily change the header and footer as it suits us. And also wrap our application with global services, providers, etc. in AppWrapper.
>
> 3. The `styles` folder contains global styles for the entire application, as well as variables and functions for all .scss files.
>
> 4. If we need to take something out of the component (constant, enum, interface, function or etc.), then we create a `constants.ts` and put it
>       - a. if it used only in 1 Component, near the Component where it is used
>       - b. if it used in multiple Component within 1 feature, inside feature folder
>       - c. if it used in multiple Components within several features, inside `utils` folder

---

### Frameworks + Language

- What framework was chosen.

> I chose the framework from the following options, in gradation from the best one I choose to the one I choose last: `Next.js`, `Remix`, `Vite`, `Gatsby`, `Astro`
>
> `Next.js`
>
> While all of these frameworks have their strengths, Next.js stands out as the best option for several reasons. It offers a balance between performance, SEO capabilities and developer experience. Its strong community support and extensive documentation make it easy to get started and find solutions to problems. Additionally, its versatility in supporting both server-side rendering and static site creation makes it suitable for a wide range of projects, from simple websites to complex web applications.
>
> Therefore, I chose Next.js as the best option for solving this problem

- Are the features of the framework used according to community best practices.

> Yes, the latest Next.js version used, with App folder structure. The features of the framework are implemented using latest standards and in alignment with community best practices.

- Does the code use features of the framework or language when possible.

> Yes, the code takes advantage of both the platform and the language where possible, optimizing performance and extending functionality.

- Are common pitfalls avoided.

> Yes, I took everything into account so that no incidents occurred

---

### Testing

- Are there automated test.

> Yes, I added `cypress` to the project and wrote a few e2e automated tests.

- How are the tests written.

> I tried to show the functionality and cover important details with tests. However, tests are something that can still be improved.

- What choices are made in testing certain parts of the code.

> Some tests were done to show the functionality. For further development it would be nice to add other test scenarios

- Are the tests written with the right level of abstraction.

> Some tests were done to show the functionality.

- What test cases are chosen.

> Basic test cases were selected to demonstrate functionality

- Does the test code make use of the features of the test framework when applicable.

> Yes, I relied on practices and documentation

---

### Design + CSS

- How much effort is taken into making the app look nice.

> I designed the app nicely using the latest best practices and a simple style.

- Is user experience taken into consideration.

> The User experience is a top priority for me throughout the development process. Several key factors have been considered to enhance the overall user experience:
>
> 1. Intuitive Design
>
> 2. Accessibility
>
> 3. Performance
>
> 4. Feedback and Error Handling
>
> 5. Responsive Design

- How was the UI implemented.

> The user interface has been implemented with precision and attention to detail, adhering to modern design principles and best practices.

- Does the application work on all devices.

> Exactly! Application supports and compatible across all devices, beginning with screens as narrow as 320px in width
