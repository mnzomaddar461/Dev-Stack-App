Name of your project : DevStack

About project: This is a learing purpese web application. This project learing how to call promis, props, conditional reandaring, use tallwincss for designing and most part of this project react tost used. 

Use technologi: 
 -> React (tsx)
 -> Tallwincss
 -> React icon
 -> React toestify
 -> Daisyui
 -> Vite 

3 features about my project
  -> Save Stack For LocalStorage
  -> Search + Category Filter
  -> Stack Export/Share

-------------------------------------Answer to the simple qustions-----------------------------------------
(1.) JSX is a way of write html code inside js. Truely is a not for html this code convart React.createElement()

(2.) Props:                                                 State:
      *Inside Prent component                                 *Inside component (self)
      *read-only, immutable                                   *Change using useState--> setter method
      *Props came from Mainlayout                             *Cerate inside components (self)

(3.) UseState remain component value and don't remove re-rendering. UseState return a array [value, setValue]. I was used UseEffect App.tsx file for data rendering.

(4.) UseEffect is a react hook.The main work outsid the component and data rendering. Main work data fetch, DOM manupulet, timer. And UseEffect need to load the JSON data because stop infinity loop, right data fetching.

(5.) React DOM uses keys to track which item is which. Missing key or id then any items are add or remove then react re-use or re-render Wrong data.

(6.) Show differint JSX base on condition this call conditional rendering. Kind of if/tarnari but write in JSX.

(7.) Child -> Parent: Direct communication isn't possible (data flow is unidirectional, from top to bottom), so the parent passes a function as a prop, and the child calls it. This is known as the "lifting state up" pattern.

The handleAdd function is created in MainLayout and passed down via props to TechCard. When the user clicks the button

