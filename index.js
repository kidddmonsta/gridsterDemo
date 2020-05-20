var gridster;

$(function(){

    gridster = $(".gridster > ul").gridster({
        widget_margins: [9, 9],
        widget_base_dimensions: [120, 100],
        min_rows: 4,
        min_cols: 4
    }).data('gridster');

    var widgets = [
        ['<li>0</li>', 1, 2],
        ['<li>1</li>', 2, 2],
        ['<li>2</li>', 2, 2],
        ['<li>3</li>', 1, 1],
        ['<li>4</li>', 1, 1]

    ];

    $.each(widgets, function(i, widget){
        gridster.add_widget.apply(gridster, widget)
    });

});