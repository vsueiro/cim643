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
