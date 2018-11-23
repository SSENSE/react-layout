# React Layout 📐

The goal of this library is to create a cutting-edge, fully responsive layout component for use with React.  Inspired by [Material UI Grid](https://material-ui.com/layout/grid/), Layout aims to push the convention forward by using CSS Grid. By using this now production-ready technology, users can create layouts in two-dimensions.  This does not replace existing technologies like Flexbox, rather, it compliments them.  Layout shines at a high-level, for example in page layouts. That being said, it can also provide for very interesting patterns at all levels. Be bold!

###### Table of Contents
- Installation
- Usage
- API Reference
- License

###### Installation

```
npm install react-layout
```

###### Usage

Layout is comprised of two components; the `Grid` and the `Cell`.  The Grid is the parent; it defines how many `grid-columns` and `grid-rows` it will have at each given break-point.  

The Cell is the child; these components are the children that will occupy the colums and rows within a given Grid at given break-points.

Internally, Layout uses five media break-points:

__xs__:  <= _599px_
__sm__: >= _600px_
__md__: >= _900px_
__lg__: >= _1200px_
__xl__: >= _1800px_


Firstly, when delcaring a Grid, one should include at least one breakpoint, and then pass an array of two numbers, these represent `grid-template-columns` and `grid-template-rows`, respectively.

In practice, this looks like:
```
<Grid
    xs={[1, 1]}
    sm={[6, 5]}
>
    // Cells go here...
</Grid>
```
Which means:
```
<Grid
    xs={[columns, rows]}
    sm={[columns, rows]}
>
    // Cells go here...
</Grid>
```

Therefore, in the above example, we have defined a Grid that will have `1 column` and `1 row` at __xs__, and then ` columns` and `5 rows` at __sm__.

Now let's add a Cell.

```
<Grid
    xs={[1, 1]}
    sm={[6, 5]}
>
    <Cell
        xs={['*']}
    >
        <div style={{ 
                backgroundColor: 'red', 
                height: '100px' 
            }} 
        />
    </Cell>
</Grid>
```

Notice the `'*'` string we passed to the __xs__ prop.  What this means is 'occupy all', essentially take up all available horizontal space. This saves the user from having to input the exact numbers. Notice as well that we've given the Cell a child, a red coloured `div` with a height of `100px`.  In Layout, the content of a Cell is what defines it's height, not the Cell itself.  This allows for much more flexibility as Cells would otherwise adopt the height of the tallest Cell in the Grid.

Let's add a few more Cells, and this time with __sm__ break-points.

```
<Grid
    xs={[1, 1]}
    sm={[6, 5]}
>
    <Cell
        xs={['*']}
        sm={[1, 7, 1, 2]}
    >
        <div style={{ backgroundColor: 'red', height: '100px' }} />
    </Cell>
    <Cell
        xs={['*']}
        sm={[1, 7, 5, 6]}
    >
        <div style={{ backgroundColor: 'blue', height: '100px' }} />
    </Cell>
    <Cell
        xs={['*']}
        sm={[1, 7, 2, 5]}
    >
        <div style={{ backgroundColor: 'yellow', height: '300px' }} />
    </Cell>
</Grid>
```

Lots going on here! Let's break it down.

First, we've added two more Cells which have almost identical children, different coloured divs with some heights defined.  Next, we've added __sm__ breakpoints to each Cell.  But what are those numbers?

```
sm={[column start, column end, row start, row end]}
```
So in the case of the first Cell, we dictate that the Cell will occupy from `1 to 7 of column space`, and from `1 to 2 of row space`.  If you inspect the Grid in your browser, you will see the lines and the Cells fitting neatly into them.

At this point you may be asking; I thought that in __xs__ I defined a Grid of 1 column and 1 row, how can I have three Cells stacking at xs if they only have 1 row?  This is by design; we want users to be able to additively stack children beyond the confines of a given Grid if they so choose!

Let's add an __md__ break-point to do something interesting
```
<Grid
    xs={[1, 1]}
    sm={[6, 5]}
>
    <Cell
        xs={['*']}
        sm={[1, 7, 1, 2]}
        md={[1, 2, 1, 6]}
    >
        <div style={{ backgroundColor: 'red', height: '100px' }}/>
    </Cell>
    <Cell
        xs={['*']}
        sm={[1, 7, 5, 6]}
        md={[6, 7, 1, 6]}
    >
        <div style={{ backgroundColor: 'blue', height: '100px' }}/>
    </Cell>
    <Cell
        xs={['*']}
        sm={[1, 7, 2, 5]}
        md={[2, 6, 1, 6]}
    >
        <div style={{ backgroundColor: 'yellow', height: '300px' }}/>
    </Cell>
</Grid>
```

Notice a key point here, we didn't define an __md__ break-point in our Grid component, but we're using __md__ in our Cells.  That's okay - the Grid is designed to adapt to the _next smallest break-point_. In this case, any Cells that are passed __md__ props will adapt to the __sm__ break-point of the Grid.

This design is meant for maximum flexibility an keeping it DRY.  Let's say you have a Grid that only has two meaningful break-points, __xs__ and __lg__.  Instead of requiring the user to input all of the meaningless in-between break-points, Layout will understand that below __lg__, the Grid will adopt the __xs__ definition.

######API Reference

__Grid__
| Property | Type | Required | Description
| --- | --- | --- | --- |
| xs | array | false | An array of two numbers: [columns, rows]
| sm | | | |
| md | | | |
| lg | | | |
| xl | | | |

__Cell__
| Property | Type | Required | Description
| --- | --- | --- | --- |
| xs | array | false | An array of four numbers: [column start, column end, row start, row end], or `['*']` to occupy all columns
| sm | | | |
| md | | | |
| lg | | | |
| xl | | | |

_*Although no perticular break-point prop is required, there must be at least one to work properly._
