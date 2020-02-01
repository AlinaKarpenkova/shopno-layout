$(function () {
    $('#featuredWorksModal').on('show.bs.modal', function (event) {
        var image = $(event.relatedTarget).html();
        $(this).find('.modal-body').html(image).find('img').attr('width', "100%").attr('height', "100%");
    });
});