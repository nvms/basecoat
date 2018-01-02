/**
 * █████████████████████████████████████████████████████████████████████████████
 * dropdown
 * █████████████████████████████████████████████████████████████████████████████
 */
var dropdown = {
    $dropdowns: null,
    openClass: 'open',
    selectClass: 'selected',
    init: function() {
        var self = this;

        self.$dropdowns = $('.dropdown');
        self.eventHandler();

        var addPad = 56;
        // For each dropdown..
        self.$dropdowns.each(function(index) {

            // Get the children of each dropdown
            var $menuItems = $(this).children('.dropdown_content').children('ul').children().children(0);

            // Find the 'longest' child
            var maxWidth = 0;
            $menuItems.each(function(index) {

                if ($(this).width() > maxWidth) {
                    maxWidth = $(this).width();
                }
            })

            // Set the width of each child to the width of the longest child
            $menuItems.each(function(index) {
                $(this).width(maxWidth + addPad);
            })

            // console.log(maxWidth);

            // Set the width of the dropdown to the width of the longest child
            $(this).width(maxWidth + addPad);

        });

    },
    updateWidth: function(e) {
        // self.$last_dropdown = e.parent().parent().parent().parent();
        // console.log(self.$last_dropdown);
        // var $menuItems = self.$last_dropdown.children('.dropdown_content').children('ul').children().children(0);
        //
        // var addPad = 56;
        // // Find the 'longest' child
        // var maxWidth = 0;
        // $menuItems.each(function(index) {
        //
        //     if ($(this).width() > maxWidth) {
        //         maxWidth = $(this).width();
        //     }
        // })
        //
        // // Set the width of each child to the width of the longest child
        // $menuItems.each(function(index) {
        //     $(this).width(maxWidth);
        // })
        //
        // // console.log(maxWidth);
        //
        // // Set the width of the dropdown to the width of the longest child
        // self.$last_dropdown.width(maxWidth);
    },
    eventHandler: function() {
        var self = this;

        // Opening a dropdown
        self.$dropdowns.find('.dropdown_title').click(function() {
            self.$dropdowns.removeClass(self.openClass);
            $(this).parents('.dropdown').addClass(self.openClass);
            // alert("Clicked");
        });

        // Click on a dropdown list
        self.$dropdowns.find('.dropdown_content ul li a').click(function() {
            var $that = $(this);
            var $dropdown = $that.parents('.dropdown');
            var $input = $dropdown.find('input');
            var $title = $(this).parents('.dropdown').find('.dropdown_title span');

            self.updateWidth($(this));

            // Remove selected class
            $dropdown.find('.dropdown_content a').each(function() {
                $(this).removeClass(self.selectClass);
            });

            // Update selected value
            $title.html($that.html());
            $input.val($that.attr('data-value')).trigger('change');

            // If back to default, remove selected class else addclass on right element
            if ($that.hasClass('dropdown_header')) {
                $title.removeClass(self.selectClass);
                $title.html($title.attr('data-title'));
            } else {
                $title.addClass(self.selectClass);
                $that.addClass(self.selectClass);
            }

            // Close dropdown
            $dropdown.removeClass(self.openClass);
        });

        // Close all dropdown onclick on another element
        $(document).bind('click', function(e) {
            if (!$(e.target).parents().hasClass('dropdown')) {
                self.$dropdowns.removeClass(self.openClass);
            }
        });
    }
};

/**
 * █████████████████████████████████████████████████████████████████████████████
 * scrollspy
 * █████████████████████████████████████████████████████████████████████████████
 */



$(function() {
    dropdown.init();
});
