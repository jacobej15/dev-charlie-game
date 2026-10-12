# dev-charlie-game
fall 2026 CIS 376 lab game 

## Know what to except 
Expected result
Does viewport work on desktop?
Yes
Does viewport work on mobile?
Yes, although browser controls affect the visible dimensions
Does swipe work on a touchscreen?
On supported browsers, yes
Does swipe require permission?
No
What happens if the user doesn't swipe far enough?	
No swipe result is displayed
Does session storage survive closing the tab?	
Normally no; it is scoped to the tab's session
Does every browser behave identically?	
No; test the devices and browsers available to you

## Demo 
**1. What is it?**

Our project demonstrates two web technologies: browser viewport detection and mobile swipe interaction.

**2. When and why would we use them?**

Viewport detection helps websites adjust their layouts to different window sizes. Swipe detection allows mobile users to interact naturally with galleries, menus, and other touch-based interfaces.

**3. How does it work?**

JavaScript uses `window.innerWidth` and `window.innerHeight` to read the viewport dimensions. It uses `touchstart` and `touchend` events to compare where a finger begins and ends on the screen.

**4. What data did we collect?**

We collected the viewport width and height and, when a swipe was detected, its direction and distance.

**5. What did we store?**

We used `sessionStorage` to save viewport information, the most recent swipe direction, and our team's information. Objects and arrays are converted to JSON strings before storage.

**6. What about privacy?**

These features do not require special permission, but that does not mean every kind of visitor information is appropriate to collect. We should only store information that is necessary for the website's purpose.
