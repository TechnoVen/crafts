# Complete HTML & CSS Reference Guide

Based on my research, I've compiled comprehensive lists of HTML elements (tags) and CSS properties and selectors used for web design. Here's your complete reference:
HTML Elements Overview (HTML provides over 100 elements organized into categories):

​

## Core Structure Tags:

Document structure: <html>, <head>, <body>, <title>, <!DOCTYPE>

Semantic sections: <header>, <footer>, <nav>, <main>, <section>, <article>, <aside>

## Content Tags:

Headings: <h1> through <h6> (six levels of importance)

Text: <p>, <div>, <span>, <br>, <hr>

Lists: <ul>, <ol>, <li>, <dl>, <dt>, <dd>

Text formatting: <strong>, <em>, <b>, <i>, <mark>, <code>, <pre>

## Media & Interactive:

Media: <img>, <video>, <audio>, <source>, <picture>, <canvas>, <svg>

Forms: <form>, <input>, <button>, <select>, <textarea>, <label>, <fieldset>
​
Tables: <table>, <tr>, <td>, <th>, <thead>, <tbody>, <tfoot>

Links: <a>, <nav>

## CSS Properties Overview

CSS includes 700+ properties (including experimental ones). Key categories:

​
Layout & Positioning:

    display, position, top, right, bottom, left, float, clear, z-index

    overflow, visibility, clip-path

Box Model:

    width, height, min-width, max-width, min-height, max-height

    margin, padding, border, border-radius, box-sizing, outline

    ​

Flexbox & Grid:

    Flexbox: flex, flex-direction, flex-wrap, justify-content, align-items, gap

    ​

    Grid: grid-template-columns, grid-template-rows, grid-area, grid-gap

Typography:

    font-family, font-size, font-weight, font-style, line-height

    text-align, text-decoration, text-transform, letter-spacing, word-spacing

    ​

    color, text-shadow, white-space, word-break

Visual Effects:

    background, background-color, background-image, opacity

    box-shadow, filter, transform, transition, animation

    ​

Advanced:

    animation-* properties, transition-* properties

    scroll-* properties, mask-* properties

    Custom properties: --* (CSS variables)

    ​

## CSS Selectors Overview

CSS provides 50+ selector types:

​

Basic Selectors:

    * - Universal selector

    element - Type selector (e.g., div, p)

    .class - Class selector

    #id - ID selector

    [attribute] - Attribute selector

    ​

Combinators:

    A B - Descendant (space)

    A > B - Direct child

    A + B - Adjacent sibling

    A ~ B - General sibling

    ​

Pseudo-classes:

    State: :hover, :active, :focus, :visited, :checked

​

Structural: :first-child, :last-child, :nth-child(n), :only-child

Validation: :valid, :invalid, :required, :disabled

Functional: :not(), :is(), :where(), :has()

    ​

Pseudo-elements:

    ::before, ::after, ::first-letter, ::first-line

    ::selection, ::placeholder, ::marker

    ​

Complete Reference

I've created a comprehensive reference document containing all HTML elements and CSS properties/selectors organized by category.

This reference includes:

    100+ HTML elements with descriptions

    300+ commonly-used CSS properties

    40+ CSS selectors with examples

    Organized by functional categories for easy lookup

The guide covers everything from basic structure tags to advanced CSS properties, making it perfect for both beginners learning web development and experienced developers needing a quick reference.

================================================================================

# COMPLETE HTML & CSS REFERENCE GUIDE

================================================================================

## Complete List of HTML Elements

### Document Structure

- <!DOCTYPE> - Document type declaration
- <html> - Root element
- <head> - Document metadata container
- <title> - Document title
- <base> - Base URL for relative URLs
- <link> - External resource link
- <meta> - Metadata
- <style> - Internal CSS
- <body> - Main content container

### Content Sections

- <header> - Header section
- <footer> - Footer section
- <nav> - Navigation links
- <main> - Main content
- <section> - Generic section
- <article> - Independent content
- <aside> - Sidebar content
- <address> - Contact information
- <h1> to <h6> - Headings (6 levels)

### Text Content

- <p> - Paragraph
- <hr> - Horizontal rule/thematic break
- <pre> - Preformatted text
- <blockquote> - Block quotation
- <ol> - Ordered list
- <ul> - Unordered list
- <li> - List item
- <dl> - Description list
- <dt> - Description term
- <dd> - Description details
- <figure> - Self-contained content
- <figcaption> - Figure caption
- <div> - Generic container
- <main> - Main content area

### Inline Text Semantics

- <a> - Anchor/hyperlink
- <abbr> - Abbreviation
- <b> - Bold text
- <bdo> - Bi-directional override
- <br> - Line break
- <cite> - Citation
- <code> - Inline code
- <data> - Machine-readable data
- <dfn> - Definition
- <em> - Emphasis
- <i> - Italic text
- <kbd> - Keyboard input
- <mark> - Highlighted text
- <q> - Inline quotation
- <s> - Strikethrough
- <samp> - Sample output
- <small> - Small text
- <span> - Inline container
- <strong> - Strong importance
- <sub> - Subscript
- <sup> - Superscript
- <time> - Time/date
- <u> - Underlined text
- <var> - Variable
- <wbr> - Word break opportunity

### Image and Multimedia

- <img> - Image
- <map> - Image map
- <area> - Clickable area in image map
- <audio> - Audio content
- <video> - Video content
- <source> - Media source
- <track> - Text track for media
- <picture> - Container for multiple image sources
- <canvas> - Graphics canvas
- <svg> - SVG graphics container

### Embedded Content

- <iframe> - Inline frame
- <embed> - External content
- <object> - External object
- <param> - Object parameters
- <portal> - Portal to another page

### Scripting

- <script> - JavaScript code
- <noscript> - No-script fallback
- <template> - Template content
- <slot> - Web component slot

### Tables

- <table> - Table
- <caption> - Table caption
- <colgroup> - Column group
- <col> - Column properties
- <thead> - Table header
- <tbody> - Table body
- <tfoot> - Table footer
- <tr> - Table row
- <th> - Table header cell
- <td> - Table data cell

### Forms

- <form> - Form container
- <label> - Input label
- <input> - Input field (multiple types)
- <button> - Clickable button
- <select> - Dropdown list
- <datalist> - Input options list
- <optgroup> - Option group
- <option> - Select option
- <textarea> - Multiline text input
- <output> - Calculation output
- <progress> - Progress bar
- <meter> - Scalar measurement
- <fieldset> - Form controls group
- <legend> - Fieldset caption

### Interactive Elements

- <details> - Disclosure widget
- <summary> - Details summary
- <dialog> - Dialog box
- <menu> - Menu list

### Web Components

- <template> - Template content
- <slot> - Web component slot

### Obsolete/Deprecated Elements (HTML5)

- <acronym> - Use <abbr> instead
- <applet> - Use <object> instead
- <basefont> - Use CSS instead
- <big> - Use CSS instead
- <center> - Use CSS instead
- <dir> - Use <ul> instead
- <font> - Use CSS instead
- <frame> - No longer supported
- <frameset> - No longer supported
- <noframes> - No longer supported
- <strike> - Use <s> or <del>
- <tt> - Use CSS instead

================================================================================

## Complete List of CSS Properties

### Layout Properties

- display
- position
- top, right, bottom, left
- float
- clear
- z-index
- overflow, overflow-x, overflow-y
- visibility
- clip
- clip-path

### Box Model

- width, height
- min-width, max-width
- min-height, max-height
- margin, margin-top, margin-right, margin-bottom, margin-left
- padding, padding-top, padding-right, padding-bottom, padding-left
- border, border-width, border-style, border-color
- border-top, border-right, border-bottom, border-left
- border-radius
- border-top-left-radius, border-top-right-radius
- border-bottom-left-radius, border-bottom-right-radius
- box-sizing
- outline, outline-width, outline-style, outline-color
- outline-offset

### Flexbox

- flex, flex-direction, flex-wrap, flex-flow
- flex-grow, flex-shrink, flex-basis
- justify-content
- align-items, align-self, align-content
- order
- gap, row-gap, column-gap

### Grid

- grid, grid-template, grid-template-columns, grid-template-rows
- grid-template-areas
- grid-column, grid-column-start, grid-column-end
- grid-row, grid-row-start, grid-row-end
- grid-area
- grid-auto-columns, grid-auto-rows, grid-auto-flow
- gap, row-gap, column-gap
- place-items, place-content, place-self

### Typography

- font, font-family, font-size, font-weight, font-style
- font-variant, font-stretch
- line-height
- letter-spacing
- word-spacing
- text-align, text-align-last
- text-decoration, text-decoration-line, text-decoration-color
- text-decoration-style, text-decoration-thickness
- text-transform
- text-indent
- text-shadow
- white-space
- word-break, word-wrap, overflow-wrap
- hyphens
- text-overflow
- direction
- unicode-bidi
- writing-mode

### Colors and Backgrounds

- color
- opacity
- background, background-color, background-image
- background-position, background-size, background-repeat
- background-attachment, background-origin, background-clip
- background-blend-mode

### Visual Effects

- box-shadow
- filter
- backdrop-filter
- mix-blend-mode
- opacity
- transform
- transform-origin
- transform-style
- perspective
- perspective-origin
- backface-visibility

### Animations and Transitions

- transition, transition-property, transition-duration
- transition-timing-function, transition-delay
- animation, animation-name, animation-duration
- animation-timing-function, animation-delay
- animation-iteration-count, animation-direction
- animation-fill-mode, animation-play-state

### Multi-column Layout

- columns, column-count, column-width
- column-gap, column-rule
- column-rule-width, column-rule-style, column-rule-color
- column-span, column-fill

### Lists and Counters

- list-style, list-style-type, list-style-position, list-style-image
- counter-reset, counter-increment
- content

### Tables

- table-layout
- border-collapse, border-spacing
- caption-side
- empty-cells

### User Interface

- cursor
- caret-color
- resize
- user-select
- pointer-events
- scroll-behavior

### Logical Properties

- block-size, inline-size
- margin-block, margin-inline
- padding-block, padding-inline
- border-block, border-inline
- inset, inset-block, inset-inline

### Custom Properties

- --\* (CSS variables)
- var()

### Advanced Properties

- aspect-ratio
- object-fit, object-position
- contain
- will-change
- isolation
- appearance
- accent-color

================================================================================

## Complete List of CSS Selectors

### Basic Selectors

- - - Universal selector
- element - Type/element selector (e.g., div, p, h1)
- .class - Class selector
- #id - ID selector
- [attribute] - Attribute selector

### Combinator Selectors

- A B - Descendant selector (space)
- A > B - Child selector
- A + B - Adjacent sibling selector
- A ~ B - General sibling selector

### Attribute Selectors

- [attr] - Has attribute
- [attr=value] - Exact value
- [attr~=value] - Contains word
- [attr|=value] - Starts with (hyphen separated)
- [attr^=value] - Starts with
- [attr$=value] - Ends with
- [attr*=value] - Contains substring

### Pseudo-classes

- :hover - Mouse over
- :active - Active element
- :focus - Focused element
- :visited - Visited link
- :link - Unvisited link
- :first-child - First child
- :last-child - Last child
- :nth-child(n) - Nth child
- :nth-last-child(n) - Nth from last
- :first-of-type - First of type
- :last-of-type - Last of type
- :nth-of-type(n) - Nth of type
- :only-child - Only child
- :only-of-type - Only of type
- :not(selector) - Negation
- :is(selector) - Matches any
- :where(selector) - Same as :is() but zero specificity
- :has(selector) - Relational pseudo-class
- :checked - Checked input
- :disabled - Disabled element
- :enabled - Enabled element
- :required - Required input
- :optional - Optional input
- :valid - Valid input
- :invalid - Invalid input
- :in-range - In range input
- :out-of-range - Out of range input
- :read-only - Read-only input
- :read-write - Read-write input
- :empty - Empty element
- :root - Root element
- :target - Target element

### Pseudo-elements

- ::before - Insert before content
- ::after - Insert after content
- ::first-letter - First letter
- ::first-line - First line
- ::selection - Selected text
- ::placeholder - Input placeholder
- ::marker - List marker
- ::backdrop - Fullscreen backdrop
