# Showcase

This page displays all projects submitted by students of the CIM103 course, fall 2022.

<label>
  Filter by:
  <select id="project">
    <option value="project-1">Project 1</option>
    <option value="project-2">Project 2</option>
    <option value="project-3">Project 3</option>
  </select>
</label>

<ul id="list"></ul>

## Can’t find your project?

If your project is not listed, you might need to:

1. Add your name (and GitHub username) to [students.json](https://github.com/vsueiro/CIM103/blob/main/showcase/students.json)
2. Create a repository called `CIM103` in your GitHub account
3. Make sure the following image exists `CIM103/project-name/media/thumbnail.png`

<style>

  #list,
  #list * {
    box-sizing: border-box;
  }

  #list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 2em 0;
  }

  #list li {
    margin: 0;
    padding: 0 1em 1em 0;
    width: 50%;
  }

  #list figure {
    margin: 0;
  }

  #list figure a:hover {
    opacity: .5;
  }

  #list figcaption {
    margin: .5em 0;
  }

  #list img {
    display: flex;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    box-shadow: 0 0 0 1px #eee;
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
      this.figure = document.createElement( 'figure' )
      this.image = document.createElement( 'img' )
      this.caption = document.createElement( 'figcaption' )

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

            this.links.demo.href = this.demo
            this.links.demo.append( this.image )

            this.links.source.href = this.source
            this.links.source.append( this.name )

            this.caption.append( 'By ', this.links.source )
            this.figure.append( this.links.demo, this.caption )
            this.item.append( this.figure )
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
