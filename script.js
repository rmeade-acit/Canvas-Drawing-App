// Wait for the page to fully load before running our code

// ===== SETUP =====
    
    // Get the canvas element and its drawing context
    
    
    
    // Make the canvas a fixed size
    
    
    
    
    
    // Set initial size and update when window resizes
    
    
    
    // ===== GET ALL THE HTML ELEMENTS WE NEED =====
    
    // Tool buttons
    
    
    
    
    
    // Settings controls
    
    
    
    
    
    // ===== DRAWING VARIABLES =====
    
    // Track if we're currently drawing
    
    
    // Track the last position of the mouse/touch
    
    
    
    // Keep track of which tool is active
    
    
    // Track the starting position for shapes
    
    
    
    // Remember what the canvas looked like before drawing a shape
    
    
    // Track if shift key is pressed
    
    
    // ===== INITIALIZE DRAWING SETTINGS =====
    
    // Set how lines will look
      // Round corners when lines meet
      // Round ends of lines
      // Line thickness
      // Line color
    
    // ===== TOOL BUTTON CLICK HANDLERS =====
    
    // When brush button is clicked
    
    
    
    
    // When eraser button is clicked
    
    
    
    
    // When square button is clicked
    
    
    
    
    // When circle button is clicked
    
    
    
    
    // When clear button is clicked
    
        // Erase everything on the canvas
    
    
    
    // ===== SETTINGS CHANGE HANDLERS =====
    
    // When brush size slider is moved
    
        // Update line thickness
    
    
        // Show the current size value
    
    
    
    // When color picker value changes
    
        // Update line color (unless using eraser)
    
    
    
    
    
    
    // ===== TOOL SWITCHING LOGIC =====
    
    // Function to change the active tool
    
        // Update the current tool
    
    
        // Remove the active highlight from all tool buttons
    
    
    
    
    
        // Set the right tool button as active and update settings
    
    
    
    
    
    
    
      // White color for eraser
    
    
    
    
    
    
    
    
    
    
    
    
    
    // ===== DRAWING FUNCTIONS =====
    
    // Function called when starting to draw
    
    
    
        // Calculate where on the canvas the mouse/touch is
    
    
    
    
        // For brush and eraser, start a new line
    
    
    
    
        // For shapes, save the starting position
    
    
    
            // Save the current canvas so we can restore it while drawing shapes
    
    
    
        // Remember this position
    
    
    
    
    // Function called while drawing
    
        // Only draw if mouse/touch is pressed down
    
    
        // Calculate where on the canvas the mouse/touch is now
    
    
    
    
        // Do different things based on the active tool
    
            // Draw a line from the last position to current position
    
    
    
    
    
    
            // First restore the canvas to how it was before starting to draw the shape
    
    
            // Calculate width and height of rectangle
    
    
    
            // Draw the rectangle
    
    
    
    
    
            // First restore the canvas to how it was before starting to draw the shape
    
    
            // Calculate width and height from start to current position
    
    
    
            // Calculate the radius based on the width and height
    
    
    
    
    
                // If shift is pressed, draw from center (original behavior)
    
    
                // If shift is not pressed, draw with top-left corner at starting position
                // This means the circle's top-left corner will be at startX, startY
    
    
    
    
    
    
        // Remember the current position for next time
    
    
    
    
    // Function called when finished drawing
    
    
    
    
    // ===== TOUCH SUPPORT FOR MOBILE =====
    
    // Helper function to get touch position
    
    
    
    
    
    
    
    
    // When touch starts on canvas
    
      // Prevent scrolling
    
    
        // Convert touch to mouse-like event
    
    
    

    
    
    // When touch moves on canvas
    
      // Prevent scrolling
    
    
        // Convert touch to mouse-like event
    
    
    
    
    
    
    // When touch ends
    
    
    
    
    
    // ===== CONNECT EVENT LISTENERS =====
    
    // Mouse events
    
    
    
    
    
    // Touch events for mobile
    
    
    
    
    // Keyboard events for modifier keys
    
    
    
    
    
    
    
    
    
    
    
    
    // Start with brush tool selected
    
