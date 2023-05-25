//your JS code here. If required.

    const line = document.getElementById('line');

    // Set the initial rotation angle
    let rotationAngle = 0;

    // Function to rotate the line
    function rotateLine() {
      rotationAngle += 1; // Increase the rotation angle by 1 degree
      line.style.transform = `rotate(${rotationAngle}deg)`;

      // Request the next animation frame
      requestAnimationFrame(rotateLine);
    }

    // Start rotating the line
    rotateLine();
