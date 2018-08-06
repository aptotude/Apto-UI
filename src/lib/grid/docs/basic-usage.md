```
<apto-container>
    <apto-row>
        <apto-col sm="true">1 of 3</apto-col>
        <apto-col sm="true">2 of 3</apto-col>
        <apto-col sm="true">3 of 3</apto-col>
    </apto-row>
</apto-container>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined column attributes. Those columns are centered in the page with the parent `<apto-container>`

Breaking it down:

* Apto Containers provide a means to center and horizontally pad your content. Use `<apto-container>` for a responsive pixel width or `<apto-container fluid="true">` for width: 100% across all viewport and device sizes.
* Apto Rows `<apto-row>` are wrappers for columns `<apto-col>`. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
* In a grid layout, content must be placed within columns `<apto-col>` and only columns may be immediate children of rows `<apto-row>`.
* Grid columns without a specified width will automatically layout as equal width columns. For example, four instances of `<apto-col sm="true">` will each automatically be 25% wide from the small breakpoint and up.
* Apto Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from rows and padding from columns with by adding the `gutter="true"` attribute to the `<apto-row>`.
* To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
* Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., `<apto-col sm="4">` applies to small, medium, large, and extra large devices, but not the first xs breakpoint).
