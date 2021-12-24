# Showcase

This page displays all projects submitted by students of the CIM103 Web Lab course, fall 2020.

<label>
  Filter by project:
  <select id="project">
    <option value="1">Lorem ipsum</option>
    <option value="2">Dolor sit amet</option>
    <option value="3">Consectetur</option>
    <option value="4">Adipisicing elit</option>
  </select>
</label>

<ul id="list"></ul>

<!--
TODO: Display student projects by linking to their own GitHub pages, like:
<img src="https://username.github.io/CIM103/image.png">
-->

<script>

  // Read list of students (and their GitHub @) from external file

  // Fnction to update list:

    // Get selected project from list
    // Shuffles list (so there is no order)

    // For each student in list
      // If selected project was submitted
        // Create item
        // Create image
        // Create author tag (with student’s name)
        // Create link to the source code
        // Add item to the list

  // When user selects another project, run update function

  // run update function on page load

  for ( let i = 0; i < 30; i++ )
  {
    let item = document.createElement( 'li' )

    item.textContent = `This is item ${i}.`
    list.append( item)
  }
</script>
