#   Drawing App Project: JavaScript Implementation

**Objective:**

Your task is to bring the provided drawing application interface to life using JavaScript. You will be responsible for implementing the core interactive drawing functionalities and ensuring a responsive user experience.

**Core Requirements:**

1.  **Canvas Interaction:**
    * Enable drawing on the canvas element in response to user input (mouse and touch events).
    * Implement different drawing tools (Brush, Eraser, Square, Circle) that modify how user interactions are translated onto the canvas.

2.  **Tool Management:**
    * Allow users to select different drawing tools via the provided buttons.
    * Keep track of the currently active tool and visually indicate this to the user.
    * Ensure the selected tool influences the drawing behavior on the canvas.

3.  **Drawing Logic:**
    * For free-form drawing (like the Brush and Eraser), implement continuous drawing as the mouse/touch moves while pressed.
    * For shape tools (Square, Circle), implement a drawing process that starts when the mouse/touch is pressed and dynamically renders the shape as the mouse/touch moves, finalizing the shape when released.

4.  **Settings Application:**
    * Enable users to control drawing properties such as color and brush size using the provided input elements.
    * Ensure these settings are dynamically applied to the drawing actions on the canvas.

5.  **Canvas Manipulation:**
    * Provide a mechanism for users to clear the entire canvas content.

6.  **Modifier Keys:**
    * Implement support for modifier keys (like the Shift key) to alter the behavior of certain drawing tools (e.g., constraining the proportions of shapes).


**Potential Additions and Embellishments:**
* **More Shapes:** Introduce additional shape tools like lines, triangles, or ellipses.
* **Mouse Click with Color** When you left click the mouse draws in one color and when you right click it draws a differenct color.
* **Image Import:** Allow users to import images onto the canvas and draw on top of them.

Remember to focus on clear, well-structured JavaScript code to implement these features.