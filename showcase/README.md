# Showcase

This page displays all projects submitted by students of the CIM103 Web Lab course, fall 2020.

<label>
  Filter by project:
  <select id="project">
    <option value="project-1">Project 1</option>
    <option value="project-2">Project 2</option>
    <option value="project-3">Project 3</option>
  </select>
</label>

<ul id="list"></ul>

<style>
  img {
    max-width: 100%;
    height: 240px;
  }
</style>

<script>

  class Item
  {
    constructor( student )
    {
      this.name = student.name
      this.github = student.github

      this.item = document.createElement( 'li' )
      this.image = document.createElement( 'img' )
      this.link = document.createElement( 'a' )

      this.base = `https://${ this.github }.github.io/CIM103/${ project.value }/`
      this.thumbnail = `${ this.base }media/thumbnail.png`

      this.update()

    }
    update() {

      fetch( this.thumbnail )

        .then( response => {

          if ( response.ok )
          {

            this.image.src = this.thumbnail
            this.link.href = this.base
            this.link.textContent = this.name

            this.item.append( this.image, this.link )
            list.append( this.item )

          }

        } )

    }
  }

  class List
  {
    constructor( file )
    {

      fetch( file )
        .then( response => response.json() )
        .then( students => {
          this.students = students
          this.shuffle()
          this.update()
        } )

      project.addEventListener( 'change', () => { this.update() } )

    }
    shuffle()
    {
      this.students.sort( () => Math.random() - 0.5 )
    }
    update()
    {
      list.replaceChildren()
      this.students.forEach( student => new Item( student ) )
    }
  }

  new List( 'students.json' )

</script>
