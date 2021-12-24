# Showcase

This page displays all projects submitted by students of the CIM103 course, fall 2022.

## Student projects

<label>
  Filter by:
  <select id="project">
    <option value="project-1">Project 1</option>
    <option value="project-2">Project 2</option>
    <option value="project-3">Project 3</option>
  </select>
</label>

<ul id="list"></ul>

<style>

  #list,
  #list * {
    box-sizing: border-box;
  }

  #list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  #list li {
    padding: 8px;
    width: 50%;
  }

  img {
    display: flex;
    width: 100%;
    aspect-ratio: 16/9;
  }

  @media (min-width: 640px) {
    #list li {
      width: 33.333%;
    }
  }

  @media (min-width: 1024px) {
    #list li {
      width: 25%;
    }
  }

</style>

<script>

  class Item
  {
    constructor( student )
    {
      this.name = student.name
      this.username = student.username
      this.course = 'CIM103'

      this.links = {}
      this.links.source = document.createElement( 'a' )
      this.links.demo = document.createElement( 'a' )

      this.item = document.createElement( 'li' )
      this.image = document.createElement( 'img' )
      this.paragraph = document.createElement( 'p' )
      this.heading = document.createElement( 'h3' )

      this.profile = `https://github.com/${ this.username }`
      this.source = `${ this.profile }/${ this.course }`
      this.demo = `https://${ this.username }.github.io/${ this.course }/${ project.value }`
      this.thumbnail = `${ this.demo }/media/thumbnail.png`

      this.update()

    }
    update() {

      fetch( this.thumbnail )

        .then( response => {

          if ( response.ok )
          {

            this.image.src = this.thumbnail
            this.heading.textContent = this.name

            this.links.source.href = this.source
            this.links.source.textContent = 'Source'

            this.links.demo.href = this.demo
            this.links.demo.textContent = 'Demo'

            this.paragraph.append( this.links.demo, ' | ', this.links.source )

            this.item.append( this.image, this.heading, this.paragraph )
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
